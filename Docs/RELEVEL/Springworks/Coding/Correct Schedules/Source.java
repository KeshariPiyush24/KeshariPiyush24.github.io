import java.util.*;

public class Source {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] arr = new int[n][2];
        for (int i = 0; i < n; i++) {
            arr[i][0] = sc.nextInt();
            arr[i][1] = sc.nextInt();
        }

        int prevP = 0;
        int prevC = 0;
        boolean flag = true;
        for (int i = 0; i < n; i++) {
            int p = arr[i][0];
            int c = arr[i][0];
            if (c > p || p < prevP || (p - prevP) < (c - prevC)) {
                flag = false;
            }
            prevP = p;
            prevC = c;
        }

        System.out.println(flag ? "YES" : "NO");

        sc.close();
    }
}