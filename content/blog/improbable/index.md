---
title: Improbable
date: "2019-05-08"
thumbnail: ./dpl2_redesign2.png
description: "User Experience Engineer"
---

## MY ROLE

I currently work as a **User Experience Engineer** on the Web UIs team at Improbable. As part of my role, I develop single page applications used to develop with Improbable software SpatialOS. The main technology stack is React, Typescript, Redux, Webpack.

Other responsibilities include:

<ul>
    <li> Research, design and build new features </li>
    <li>Conduct usability tests on new designs and action feedback in follow up releases.</li>
    <li>Build and maintain internal library of reusable components and design frameworks for rapid prototyping</li>
    <li>Liaise with API teams to expose new API functionality in the UI.</li>
    <li>Collaborate with other teams to provide front end skill expertise to other engineering teams </li>
    <li>Mentor non-engineering staff in front end technology skill development </li>
</ul>

## PROJECTS

As these projects are ongoing, I am limited in the details and visuals of these projects that I can provide, but I have to provide basic overview.

<h4 align="center">CONTENTS</h4>
<p align="center">
    <a href="#create" style="white-space: nowrap">Designing the Create Deployment Flow</a><br>
    <a href="#search" style="white-space: nowrap">Scalable Search</a><br>
    <a href="#brand" style="white-space: nowrap">Redesigning for Brand Alignment</a><br>
    <a href="#scale" style="white-space: nowrap">Redesigning a Web App for Scale</a><br>
</p>

<a name="create" style="display: block; position: relative; top: -7vw"></a>

#### DESIGNING THE CREATE DEPLOYMENT FLOW

I was asked to propose a UI flow for creating a new deployment, a process current only possible using a command line tool. This required investigation into this CLI process and what information a user was expected to provide when creating a deployment.

With a list of required user inputs, I began to desing a UI wizard to guide users through the process. For certain stages, user inputs were more complex than just text and dropdowns. For example,

![create-modal.png](./create-modal.png)

<p align="center" style="font-size: 0.8em; position: relative; top: -4vw;">As users fill in basic deployment information, the overview on the right updates. The navigation bar on top shows them the steps they have to take to create a deployment and what stage they're at.</p>

![create-modal-snapshot.png](./create-modal-snapshot.png)

<p align="center" style="font-size: 0.8em; position: relative; top: -4vw;">The snapshot step, like assemblies and config requires more complex user inputs</p>

<a name="search" style="display: block; position: relative; top: -6vw"></a>

#### SCALABLE SEARCH

Following the redesign of the Console to support large numbers of deployments, a need for the ability to search and filter these deployments quickly became evident.

I worked with the API team to design compatible server side filtering functionality. I researched and designed the UI for basic and advanced search. I also implemented the feature and managed the internal and external release to users.

![search.png](./search.png)

<p align="center" style="font-size: 0.8em; position: relative; top: -4vw;">Mock up for advanced search functionality</p>

<a name="brand" style="display: block; position: relative; top: -6vw"></a>

#### REDESIGNING FOR BRAND ALIGNMENT

New brand guidelines were supplied by the marketing team and the team was tasked with updating our web applications to better suit the new style. The challenge was that the guidelines were designed for print and media use rather than UI. The 'boxy' style when used for UI threatened to look too old-school, dated rather than modern. Below are a few of the investigations I came up with.

![dpl2_original.png](./dpl2_original.png)

<p align="center" style="font-size: 0.8em; position: relative; top: -4vw;">Current design</p>

![brand.png](./brand.png)

<p align="center" style="font-size: 0.8em; position: relative; top: -4vw;">Example of the new brand's visual look used for inspiration</p>

![dpl2_redesign_1.png](./dpl2_redesign1.png)

<p align="center" style="font-size: 0.8em; position: relative; top: -4vw;">Redesign Option 1</p>

![dpl2_redesign_2.png](./dpl2_redesign2.png)

<p align="center" style="font-size: 0.8em; position: relative; top: -4vw;">Redesign Option 2</p>

<a name="scale" style="display: block; position: relative; top: -6vw"></a>

#### REDESIGNING A WEB APP FOR SCALE

The aim of this project was to improve load times for the Console, a web app used by SpatialOS developers to manage their cloud deployments.

The current web app had poor loading times for users with large numbers of deployments because the API used did not page data, instead waiting to receive one large segment of data before loading the page.

New APIs had been built, and our team was tasked with reimplementing the web app to hit these APIs, focusing on ensuring that it would still work well when users had 10,000 deployments.

A structural redesign of the sitemap was also needed to reflect changes in how the API stored deployment data.

![pfc_original.png](./pfc_original.png)

<p align="center" style="font-size: 0.8em; position: relative; top: -4vw;">Current design of the new page, with support with 10,000 deployments</p>

![create.png](./create.png)

<p align="center" style="font-size: 0.8em; position: relative; top: -4vw;">Prospective stylistic redesign based on new brand guidelines</p>
