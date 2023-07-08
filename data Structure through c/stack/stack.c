#include<stdio.h>
#include<conio.h>

int length = -1 ;
int stack[100] ;


int push(int val){
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
    else{
        return stack[length--] ;
    }
}


void peek(){
    if(length == -1){
        printf("stack empty") ;
    }
    else{
        printf("%d",stack[length]) ;
    }
}

int main(){
    char s[100] ;
    printf("your stack values are");
    return 0 ;
}