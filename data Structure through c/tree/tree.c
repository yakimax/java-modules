#include<stdio.h>
#include<stdlib.h>

struct node{
    int data ;
    struct node *left ;
    struct node *right ;
};

// void constructTree(int arr){

// }

int main(){
    int n ;
    scanf("%d",&n);
    int *arr = (int*) malloc(n * sizeof(int));
    int *p ;
    p = arr ;
    for(int i = 0 ; i < n ; i++){
        scanf("%d",(p + i));
    }
    p = arr;
    for(int i = 0 ; i < n ; i++){
        printf("%d\n",*(p+i));
    }
    
    return 0 ;
}
