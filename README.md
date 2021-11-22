# frontend-developer-hiring

# Coding Exercise (React.js)

In this code challenge, we would like to assess your skills and knowledge in areas that matter to us, and we work with on a daily basis.

What we review:

-   **Architecture:** how clean is the separation of components, folder structuring and design patterns?
-   **React Skills:** state management, routing, performance and optimisations, etc.
-   **Code Quality:** are namings across the code appropriate? Is the code reusable and readable? Are there any ESLint issues?
-   **Documentation:** are technical choices and trade-offs explained?

## Notes
> If you have any questions or encounter any problems, feel free to let us know.

> The audience of this web application is users on desktop, with the latest browsers

> Although we have noted what library/framework we use at Kodeeo in different parts of this README, you can use any library or framework that you are comfortable with.

## 🎯 Objective

Create a web app that lists Rick and Morty characters based on this API: https://rickandmortyapi.com/documentation/

### Homepage

Should include:

1. list 20 characters per page
2. have pagination
3. each character should have a card

### Card
Should include this information about a character:
1. image
2. name
4. a link to the character's profile

### Profile
Should be accessible on this route: `/profile/%character_id` and include this information in addition to the card:

1. species
2. type
3. gender
4. location name
5. backlink to the homepage

### Search
1. A search box should be present on all pages.
2. After the user submits the search query, redirect the user to this route: `/search?q=%s`
3. Then show a listing of found results. Add pagination if results are more than 20.

### Recently Visited Profiles
Show a list of the **last 10 visited profiles** in the footer of all pages.

Please use a Global State Management library ([Zustand](https://github.com/pmndrs/zustand), [Redux](https://redux.js.org/), etc.).

## Requirements

-   A working React application
    -   `yarn build` or `npm build` runs successfully
-   A minimalistic UI
    -   You can use plain CSS or any library/framework
    -   We mainly use [TailwindCSS](https://tailwindcss.com/)

## Setup

To set up the project you have multiple options:

1. You can use both Create React App or Next.js.
2. If you are using custom build system, you must have ESLint and Prettier properly setup with your system.

## Submission

Please create a pull request and notify us by email.
Shortly after, we will provide our feedback in the PR.

In a follow-up meeting we might ask about the questions below, perhaps take notes while developing:
-   Reasoning behind your technical choices including architectural
-   Any further improvement you could have made if you had more time
-   Any trade-offs you might have made due to some constraints

## Nice-to-Haves:
Of course, given the time constraint we do not expect any of these tasks to be completed, but if you fancy taking this challenge to the next level, feel free to work on any of these tasks:
-   Use SEO-friendly page slugs. E.g. `/profile/24-rick-sanchez`
-   Set page title for each different page
-   Submit the search form when the user presses the `Enter` key
