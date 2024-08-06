export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; //Variable is local to the if block
    const task2 = false; //Variable is local to the if block
  }

  return [task, task2];
}
