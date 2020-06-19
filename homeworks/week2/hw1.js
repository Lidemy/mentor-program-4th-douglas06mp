function printStars(n) {
  if (n < 1) return;
  do {
    console.log('*');
    n--;
  } while (n > 0);
}

printStars(5);
