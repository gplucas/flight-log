For example, you could be working on different features in your code and have a separate branch for each feature. When you switch to a branch, you can commit code changes which only affect that particular branch. Then, you can switch to another branch to work on a different feature, which won't be affected by the changes and commits made from the previous branch.

## 5.3. Merging branches

You can merge branches in situations where you want to implement the code changes that you made in an individual branch to a different branch.

For example, after you fully implemented and tested a new feature in your code, you would want to merge those changes to the stable branch of your project (which is usually the default **master** branch).

To merge the changes from a different branch into your current branch, you can use this command:

```bash
git merge <branch-name>
```

You would replace `<branch-name>` with the branch that you want to integrate into your current branch.