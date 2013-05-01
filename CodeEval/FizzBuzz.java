import java.io.*;

public class Main {
    public static void main (String[] args) {
        try{
            File file = new File(args[0]);
            BufferedReader in = new BufferedReader(new FileReader(file));
            
            String line;

            while ((line = in.readLine()) != null) {
                String[] lineArray = line.split(" ");
                if (lineArray.length > 0) {
                    //Process line of input Here
                    int divByA = Integer.parseInt(lineArray[0]);
                    int divByB = Integer.parseInt(lineArray[1]);
                    int loopTillN = Integer.parseInt(lineArray[2]);
                    
                    for (int i = 1; i <= loopTillN; i++){
                        if (i % divByA == 0 && i % divByB == 0){
                            System.out.print("FB");
                        }
                        else if (i % divByA == 0){
                            System.out.print("F");
                        }
                        else if (i % divByB == 0){
                            System.out.print("B");
                        }
                        else{
                            System.out.print(i);
                        }
                        System.out.print(" ");
                        
                        if (i == loopTillN){
                            System.out.println();
                        }
                    }
                }
            }
        }
        catch (IOException e) {
            System.out.println("File Read Error: " + e.getMessage());
        }
      
    
    }
}