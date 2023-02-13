const newFormHandler = async (event) => {
  event.preventDefault();
  const exercises = [];
  const name = document.querySelector('#workoutName').value.trim();
  const exerciseIds = document.querySelectorAll(
    'input[type=checkbox]:checked'
  );
  exerciseIds.forEach((id) => exercises.push(id.value));

  const response = await fetch(`/api/workouts`, {
    method: 'POST',
    body: JSON.stringify({ name, exercises }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to create project');
  }
};

document
  .querySelector('.new-workout-form')
  .addEventListener('submit', newFormHandler);