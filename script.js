function playClickSound() {
  const source = 'click.mp3'; // 소리 파일 경로

  const click = new Audio(source);
  click.play();
}