import java.util.*;


class graph{

    static class edge{
        int v ;
        int nbr ;
        int wt ;
        edge(int v,int nbr ,int wt){
            this.v = v ;
            this.nbr = nbr ;
            this.wt = wt ;
        }     
    }

    public static void main(String[] args) {
        Scanner scn  = new Scanner(System.in) ;
        int n = scn.nextInt();
        ArrayList<edge>[]graph = new ArrayList[n] ;
        for( int i = 0 ; i < n ; i++ ){
            graph[i]= new ArrayList<>();
        }
        for(int i = 0 ; i < n ; i++){
            int v = scn.nextInt();
            int nbr = scn.nextInt();
            int wt = scn.nextInt();
            graph[v].add(new edge(v,nbr,wt));
            graph[nbr].add(new edge(nbr,v,wt));
        }
        scn.close();

    }
}