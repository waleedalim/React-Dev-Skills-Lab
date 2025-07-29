# React Dev Skills Lab 

## Intro

Now that you've learned a bit about components in React, let's practice defining and rendering a few more.

## Exercises

The goal of the lab is to put in a rep doing everything that you did during the _React Intro & Components_ lesson.

Create a new React app named "react-dev-skills" and a github repository.
`npm create vite@latest`

Code the app so that it renders the following UI:

<img src="https://i.imgur.com/z1ZMjrG.png">
> Feel free to style different colors, however, layout should be similar.Using the following component hierarchy:

<img src="https://i.imgur.com/Z7yRF8b.png">

## Hints

- The components are as follows:

  | Component                       | Renders                                                                                                                                                                               |
  | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `<App>`                         | <ul><li>`<h1>`</li><li>`<SkillList>`</li><li>`<hr>`</li><li>`<NewSkillForm>`</li></ul>                                                                                                |
  | `<SkillList>`                   | <ul><li>`<ul>`</li><li>`<SkillListItem>` x 3</li></ul>                                                                                                                                |
  | `<SkillListItem>`               | <ul><li>`<li>` with "SkillListItem" as its content</li></ul>                                                                                                                          |
  | `<NewSkillForm>`                | <ul><li>`<form>`</li></ul>                                                                                                                                                            |
  | `<form>` in<br>`<NewSkillForm>` | <ul><li>`<label>` with "Skill" and `<input>` as its content</li><li>`<label>` with "Level" and `<select>` as its content</li><li>`<button>` with "ADD SKILL" as its content</li></ul> |
  | `<select>` in<br>`<form>` above | <ul><li>`<option>` x 5 with content of "1" thru "5"`</li></ul>                                                                                                                        |
