#include<stdio.h>
#include<stdlib.h>

struct node{
    int data ;
    struct node left ;
    struct node right ;
};

void constructTree(int arr){
    
}

int main(){
    int n ;
    scanf("%d",&n);
    int arr[n];
    int *p ;
    p = arr ;
    for(int i = 0 ; i < n ; i++){
        p = (p + i) ;
        scanf("%d",*p);
    }
    p=arr;
    for(int i = 0 ; i < n ; i++){
        printf("%d",*(p+i));
    }
    
    return 0 ;
}
