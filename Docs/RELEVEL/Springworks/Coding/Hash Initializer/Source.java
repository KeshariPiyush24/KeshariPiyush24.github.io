import java.util.*;

import javax.naming.spi.DirStateFactory.Result;

public class Source {
    static int[][] dp = new int[1003][1003];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int max = 0;
        int ans = 1000;

        for (int i : arr) {
            Set<Integer> temp = new HashSet<>();
            for (int j : arr)
                temp.add(j % i);
            if (temp.size() > max) {
                max = temp.size();
                ans = i;
            } else if (temp.size() == max && i < ans) {
                ans = i;
            }
        }

        System.out.print(ans);

        sc.close();
    }

}