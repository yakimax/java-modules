#include<stdio.h>
#include<conio.h>

int length = -1 ;
int stack[100] ;

int pop(){
    if(length == -1){
        printf("stack underflow") ;
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
        return stack[length--] ;
    }
}

int main(){
    char s[100] ;
    printf("your stack values are");
    return 0 ;
}