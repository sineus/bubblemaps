# Token explorer

This is a micro application to display a list of token pairs with the help of DEX Screener API

To start the application, use this command :

```sh
  yarn && yarn dev
```

### Packages

| Library    | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| React      | Required for the project                                    |
| Typescript | Required for the project                                    |
| Chakra UI  | Ultra customizable UI lib, easy to implement and performant |
| Tanstack   | Request state management, cache management                  |
| Zustand    | It's the simplest store management library available        |
| Zod        | The best library to make data validation                    |

The Dexscreener API is really inconsistent, so I had to validate the data before displaying it in the components. It can't be used without a search term, so I also had to handle that case.

I used Zustand because, for me, it's the simplest and most efficient store library out there (along with Pinia, of course). For now, it only handles one query for searching, but we can easily add filters later on.

For queries, I have a fetcher and a query function from tanstack, which allows me to use either the fetcher alone or the query function for use in a component.

To quickly create a micro application without having to manage the style part, I used Chakra UI, which is one of the most powerful and flexible libraries available. The styles are not utility classes (like Tailwind), and they are not generated at runtime but during the build. This allows for a lightweight and high-performance application in production. It contains all the components necessary to create an application and even allows you to create your own components.

The React compiler has been enabled, which is why useCallback, useMemo, etc. are not used.

For this type of application, I didn't do any testing, TDD, DDD, etc. It's overkill. However, I did implement a feature-based architecture for the example.

This project is for a technical interview with Bubblemaps.
