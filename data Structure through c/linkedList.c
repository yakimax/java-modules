#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data ;
    struct node* next ;
};



typedef struct Node node ;
node* head = NULL ;
node* tail = NULL ;
int length ;



void addFirst(int val){
    node* temp = (node *)malloc(sizeof(node)) ;
    temp->data = val ;
    temp->next = NULL ;
    head = temp ;
    tail = head ;
}



void addnode(int val){
    if(head == NULL){
        addFirst(val) ;
    }
    else{
        node* temp = (node *)malloc(sizeof(node)) ;
        temp->data = val ;
        tail->next = temp ;
        temp->next = NULL ;
        tail = temp ;
    }
}



void printList(node* head){
    node* temp = head ;
    while(temp != NULL){
        int val = temp->data ;
        temp = temp->next ;
        printf("\n%d",val) ;
    }
}



int main(){
    printf( "hello there your linked list is here" ) ;
    addnode(1);
    addnode(2);
    addnode(3);
    printList(head);
}