export function accuracyCounting(mistakes: number, pressingCount: number) {
  if (pressingCount) {
    return (100 - ((mistakes / pressingCount) * 100)).toFixed(2);
  }
  
  return '0.00';
}

export function speedCounting(correctLetters: number, seconds: number) {
  if (seconds) {
    const words = correctLetters / 5;
    const minutes = seconds / 60;
    
    return (words / minutes).toFixed(2);
  }
  
  return '0.00';
}