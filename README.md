# ESLint BlackDice config

> We are using tabs, you can go away now ;)

Configuration used in our projects based on great [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) with couple tweaks we like better.

[![NPM](https://nodei.co/npm/eslint-config-blackdice.png)](https://www.npmjs.com/package/eslint-config-blackdice)

> eslintrc.yml

```
extends: blackdice
```

In this case it's also necessary to install peer dependency of `eslint` package itself.

# Next gen

Alternatively if some of EcmaScript proposal features are used, following will use Babel parser instead of ESlint default one to support those.

> eslintrc.yml

```
extends: blackdice/next
```

In this two other packages needs to be installed: `babel-eslint` & `eslint-plugin-babel`. Along those you will obviously need other Babel related packages like some presets and plugins that do actual parsing. Most likely one of [stage plugins](https://babeljs.io/docs/plugins/) is a good idea, otherwise you don't to use this extended config at all.
