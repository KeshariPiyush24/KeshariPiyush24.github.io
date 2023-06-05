import java.util.*;

public class Source {
    static int[][] dp = new int[1003][1003];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] words = sc.nextLine().split("\\s+");
        int characterLimit = sc.nextInt();

        ArrayList<String> chunks = new ArrayList<>();
        chunks.add(words[0]);

        for (int i = 1; i < words.length; i++) {
            String last = chunks.get(chunks.size() - 1);
            if (last.length() + words[i].length() + 1 <= characterLimit - 9) {
                chunks.remove(chunks.size() - 1);
                chunks.add(last + " " + words[i]);
            } else {
                chunks.add(words[i]);
            }
        }

        for (int i = 0; i < chunks.size(); i++) {
            System.out.println("[" + (i + 1) + "/" + chunks.size() + "]: " + chunks.get(i));
        }

        sc.close();
    }

}