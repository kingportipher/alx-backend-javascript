export default function iterateThroughObject(reportWithIterator) {
  // Convert iterator to an array of employee names
  const employeeNames = [...reportWithIterator];
  
  // Join the employee names with ' | ' separator
  return employeeNames.join(' | ');
}
