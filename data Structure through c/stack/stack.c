#include<stdio.h>
#include<conio.h>

int length = -1 ;
int stack[100] ;


void push(int val){
    if(length == 100){
        printf("stack overflow");
    }else{
        stack[++length] = val ;
    }
}


int pop(){
    if(length == -1){
        printf("stack underflow") ;
    }
    else if(length == 0){
        
    }
    
    return stack[length--] ;
}


void peek(){
    if(length == -1){
        printf("stack empty") ;
    }
    else{
        printf("%d",stack[length]) ;
    }
}


void print(){
    if(length != -1){ 
        for(int i = 0 ; i <= length ; i++){
            printf("\n%d",stack[i]) ;
        }
    }else{
        printf("stack is empty") ;
    }
}


int main(){
    for(int i = 0 ; i < 10 ; i++){
        push(i) ;
    }
    int val1 = pop() ;
    printf("%d\n",val1) ;
    int val2 = pop() ;
    printf("%d\n",val2) ;
    printf("your stack values are") ;
    print();
    
    
    return 0 ;
}