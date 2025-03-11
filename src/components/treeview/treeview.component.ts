// infinite-tree-view.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TreeNode {
  id: string | number;
  label: string;
  expanded?: boolean;
  children: TreeNode[];
  data?: any; // Optional additional data
}

@Component({
  selector: 'app-infinite-tree-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './treeview.component.html',
  styleUrl: './treeview.component.scss'
})
export class InfiniteTreeViewComponent {
  @Input() treeData: TreeNode[] = [];
  @Input() allowAdd = true;
  @Input() allowDelete = true;
  @Input() allowEdit = true;
  @Input() isRootLevel = true;

  @Output() nodeClicked = new EventEmitter<TreeNode>();
  @Output() nodeAdded = new EventEmitter<{ parent: TreeNode | null, node: TreeNode }>();
  @Output() nodeDeleted = new EventEmitter<TreeNode>();
  @Output() nodeEdited = new EventEmitter<TreeNode>();

  editingNode: TreeNode | null = null;
  editingNodeLabel = '';
  editingNodeParent: TreeNode | null = null;
  isNewNode = false;

  // Toggle node expanded state
  toggleNode(node: TreeNode): void {
    node.expanded = !node.expanded;
  }

  // Handle node click event
  onNodeClick(node: TreeNode): void {
    this.nodeClicked.emit(node);

    if (this.allowEdit) {
      this.startEditNode(node);
    }
  }

  // Forward events from child components
  onChildNodeClick(node: TreeNode): void {
    this.nodeClicked.emit(node);
  }

  onChildNodeAdded(event: { parent: TreeNode | null, node: TreeNode }): void {
    this.nodeAdded.emit(event);
  }

  onChildNodeDeleted(node: TreeNode): void {
    this.nodeDeleted.emit(node);
  }

  onChildNodeEdited(node: TreeNode): void {
    this.nodeEdited.emit(node);
  }

  // Add a new child node
  addChildNode(parent: TreeNode): void {
    if (!parent.children) {
      parent.children = [];
    }

    const newNode: TreeNode = {
      id: this.generateUniqueId(),
      label: 'New Node',
      children: []
    };

    this.editingNodeParent = parent;
    this.isNewNode = true;
    this.editingNode = newNode;
    this.editingNodeLabel = newNode.label;
  }

  // Add a root level node
  addRootNode(): void {
    const newNode: TreeNode = {
      id: this.generateUniqueId(),
      label: 'New Root Node',
      children: []
    };

    this.editingNodeParent = null;
    this.isNewNode = true;
    this.editingNode = newNode;
    this.editingNodeLabel = newNode.label;
  }

  // Delete a node
  deleteNode(node: TreeNode): void {
    const confirmed = confirm(`Are you sure you want to delete "${node.label}"?`);
    if (!confirmed) {
      return;
    }

    // Emit event for parent component to handle the actual deletion
    this.nodeDeleted.emit(node);
  }

  // Start editing a node
  startEditNode(node: TreeNode): void {
    this.editingNode = node;
    this.editingNodeLabel = node.label;
    this.isNewNode = false;
  }

  // Save node edit
  saveNodeEdit(): void {
    if (!this.editingNode) return;

    this.editingNode.label = this.editingNodeLabel;

    if (this.isNewNode) {
      if (this.editingNodeParent) {
        // Add to parent's children
        this.editingNodeParent.children?.push(this.editingNode);
        this.editingNodeParent.expanded = true; // Expand parent to show new child
        this.nodeAdded.emit({ parent: this.editingNodeParent, node: this.editingNode });
      } else {
        // Add as root node
        this.treeData.push(this.editingNode);
        this.nodeAdded.emit({ parent: null, node: this.editingNode });
      }
    } else {
      // Just notify about the edit
      this.nodeEdited.emit(this.editingNode);
    }

    this.cancelNodeEdit();
  }

  // Cancel node edit
  cancelNodeEdit(): void {
    this.editingNode = null;
    this.editingNodeParent = null;
    this.editingNodeLabel = '';
    this.isNewNode = false;
  }

  // Helper method to generate a unique ID
  private generateUniqueId(): string {
    return 'node_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
  }
}