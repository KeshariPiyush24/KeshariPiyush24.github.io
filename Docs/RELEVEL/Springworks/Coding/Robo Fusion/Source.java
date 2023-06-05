import java.util.*;

public class Source {
    static int[][] dp = new int[1003][1003];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int[] robots = new int[n + 3];
        robots[0] = robots[n + 2] = 1000;

        for (int i = 1; i <= n; i++) {
            robots[i] = sc.nextInt();
            robots[i + 1] = sc.nextInt();
        }

        System.out.print(helper(robots, 2, n));

        sc.close();
    }

    static int helper(int[] robots, int i, int j) {
        if (i > j)
            return 0;
        if (dp[i][j] != 0)
            return dp[i][j];
        if (i == j)
            return robots[i - 1] * robots[i] * robots[i + 1];

        int res = Integer.MAX_VALUE;

        for (int k = i; k <= j; k++) {
            int temp = helper(robots, i, k - 1) + robots[i - 1] * robots[k] * robots[j + 1] + helper(robots, k + 1, j);
            res = Math.min(res, temp);
        }

        return dp[i][j] = res;
    }
}