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
  @Input() isRootLevel = true;

  @Output() nodeClicked = new EventEmitter<TreeNode>();

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

  }

  // Forward events from child components
  onChildNodeClick(node: TreeNode): void {
    this.nodeClicked.emit(node);
  }


}