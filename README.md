# Rose API-thecary (A locally sourced, hand-crafted API)

## Demo

[Link to Demo](https://alchemy-rose-api-thecary.herokuapp.com/)

## Getting Started

Use [this template](https://github.com/alchemycodelab/backend-rose-api-thecary) to get started.

### Learning Objectives

- Use a GET route in Express to retrieve a list of related resources from a Postgres database

### Description

Welcome to Rose API-thecary. A locally-sourced hand-crafted API which returns lists of Characters, Episodes and Quotes from the instant-classic show [Schitt's Creek](https://www.imdb.com/title/tt3526078/). You have been provided with some seed data and the skeleton Model files but you will need to add controllers and add static model methods for retrieving the data to meet the acceptance criteria.

Work one route at a time -- remove the `.skip` from the test and get the test to pass. Then ACP. You should end up with at least 3 commits - 1 for each route and your CI should be passing on each commit.

### Acceptance Criteria

- Users should be able to view a list of Episodes at `/episodes` -- episode data should include a nested array of quotes and have the following shape

```js
{
  id: '3',
  title: 'New Car',
  season: 3,
  number: 303,
  quotes: [
    {
      id: 3,
      detail: "I dont want to be taken advantage of because I'm overdressed.",
      character_id: 2,
    },
  ],
}
```

- Users should be able to view a list of Characters at `/characters` - character data should include a nested list of quotes and have the following shape

```js
{
  id: '1',
  first_name: 'Moira',
  last_name: 'Rose',
  quotes: [
    {
      id: 1,
      detail:
        'What you did was impulsive, capricious, and melodramatic. But, it was also wrong.',
      character_id: 1,
    },
  ],
}

```

- All tests are passing

### Rubric

| Task                                                         | Points                            |
| ------------------------------------------------------------ | --------------------------------- |
| At least 2 commits, one per route                            | 2                                 |
| GET `/episodes` route                                        | 4                                 |
| GET `/characters` route                                      | 4                                 |
| <span style="color:red">Minus 1 for each failed test </span> | <span style="color:red">-1</span> |

## Stretch Goal (+2 points)
- Users should be able to add a new Quote to the database via a POST route to `/quotes`. The request body should have the following shape:

```js
{
  character_id: 3,
  episode_id: 6,
  detail: "Okay, I have never heard someone say so many wrong things, one after the other, consecutively, in a row."
}
```
