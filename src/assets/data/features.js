export default function addIndex(arr) {
  const result = arr.map((user, index) => {
    return {
      ...user,
      id: index + 1
    }
  });

  return result;
}