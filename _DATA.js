const decks = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'Is React a library for managing user interfaces?',
          answer: 'yes',
          answered: false
        },
        {
          question: 'Do you make Ajax requests in the render method in React?',
          answer: 'No',
          answered: false
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'Is a closure the combination of a function and the lexical environment within which that function was declared.?',
          answer: 'Yes',
          answered: false
        }
      ]
    }

};

const _getDecks = () => {
    return new Promise((res, rej) => {
      setTimeout(() => res({...decks}), 1000)
    })
};
  
export {_getDecks};
