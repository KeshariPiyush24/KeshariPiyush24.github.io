import java.util.*;

public class Source {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        sc.nextLine();
        HashMap<String, ArrayList<String>> adj = new HashMap<>();
        while (n-- > 0) {
            String source = sc.next();
            String destination = sc.next();
            if (!adj.containsKey(source))
                adj.put(source, new ArrayList<String>());
            adj.get(source).add(destination);
        }
        String start = sc.next();
        HashSet<String> visited = new HashSet<>();
        dfs(adj, start, visited);

        sc.close();
    }

    public static void dfs(HashMap<String, ArrayList<String>> adj, String start, HashSet<String> visited) {
        if (visited.contains(start))
            return;
        System.out.println(start);
        visited.add(start);
        if (!adj.containsKey(start))
            return;
        for (String child : adj.get(start)) {
            dfs(adj, child, visited);
        }
    }

}