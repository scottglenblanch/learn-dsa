#!/bin/bash

# Array of files to rename
files=(
  "./src/chapter1-arrays/lesson4-stacks/challenges/minimum-stack/minimum-stack.test.ts"
  "./src/chapter1-arrays/lesson4-stacks/challenges/minimum-stack/minimum-stack.ts"
  "./src/chapter1-arrays/lesson4-stacks/challenges/valid-parentheses/valid-parentheses.test.ts"
  "./src/chapter1-arrays/lesson4-stacks/challenges/valid-parentheses/valid-parentheses.ts"
  "./src/chapter1-arrays/lesson4-stacks/implementation/stack.test.ts"
  "./src/chapter1-arrays/lesson4-stacks/implementation/stack.ts"
  "./src/chapter2-linked-lists/lesson5-singly-linked-lists/challenges/reverse-linked-list/reverse-linked-list.test.ts"
  "./src/chapter2-linked-lists/lesson5-singly-linked-lists/challenges/reverse-linked-list/reverse-linked-list.ts"
)

# Loop through each file
for file in "${files[@]}"; do
  # Check if file exists
  if [[ -f "$file" ]]; then
    # Determine new file name
    if [[ "$file" =~ test\.ts$ ]]; then
      new_file="${file%.test.ts}.object-oriented.test.ts"
    else
      new_file="${file%.ts}.object-oriented.ts"
    fi
    
    # Rename the file
    mv "$file" "$new_file"
    echo "Renamed: $file -> $new_file"
  else
    echo "File not found: $file"
  fi
done