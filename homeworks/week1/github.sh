curl https://api.github.com/users/$1 | grep -w 'name\|bio\|location\|blog' | awk '{$1=""; print}' | sed 's/"//g; s/.$//'