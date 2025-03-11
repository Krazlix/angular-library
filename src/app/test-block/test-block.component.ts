import { Component } from '@angular/core';
import { InfiniteTreeViewComponent, TreeNode } from "../../components/treeview/treeview.component";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test-block',
  standalone: true,
  imports: [InfiniteTreeViewComponent, JsonPipe],
  templateUrl: './test-block.component.html',
  styleUrl: './test-block.component.scss'
})
export class TestBlockComponent {
  treeData: TreeNode[] = [
    {
      id: '1',
      label: 'Root Node 1',
      expanded: true,
      children: [
        {
          id: '1.1',
          label: 'Child 1.1',
          children: [
            { id: '1.1.1', label: 'Grandchild 1.1.1', children: [] },
            { id: '1.1.2', label: 'Grandchild 1.1.2', children: [] }
          ]
        },
        { id: '1.2', label: 'Child 1.2', children: [] }
      ]
    },
    {
      id: '2',
      label: 'Root Node 2',
      children: [
        { id: '2.1', label: 'Child 2.1', children: [] }
      ]
    }
  ];


  selectedNode: TreeNode | null = null;

  onNodeClicked(node: TreeNode): void {
    this.selectedNode = node;
    console.log('Node clicked:', node);
  }

  onNodeAdded(event: { parent: TreeNode | null, node: TreeNode }): void {
    console.log('Node added:', event);
    // You could save to a backend here
  }

  onNodeDeleted(node: TreeNode): void {
    console.log('Node deleted:', node);

    // Handle actual deletion recursively
    this.deleteNodeFromTree(this.treeData, node);

    // Clear selection if deleted node was selected
    if (this.selectedNode === node) {
      this.selectedNode = null;
    }
  }

  onNodeEdited(node: TreeNode): void {
    console.log('Node edited:', node);
    // You could save to a backend here
  }

  // Recursively search and delete a node from the tree
  private deleteNodeFromTree(nodes: TreeNode[], nodeToDelete: TreeNode): boolean {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === nodeToDelete.id) {
        nodes.splice(i, 1);
        return true;
      }

      if (nodes[i] !== undefined && nodes[i].children !== undefined && nodes[i].children.length > 0) {
        if (this.deleteNodeFromTree(nodes[i].children, nodeToDelete)) {
          return true;
        }
      }
    }

    return false;
  }

}
