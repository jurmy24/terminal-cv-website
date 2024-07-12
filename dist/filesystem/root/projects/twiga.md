# 🦒 Twiga: Empowering Tanzanian Education with AI

![Twiga Chatbot](assets/twiga-screenshot.jpeg)

Twiga is a WhatsApp chatbot designed specifically for Tanzanian teachers. I made this as a part of my master thesis project at KTH, aimed at enhancing the educational experience through the integration of LLMs and RAG.

## Project Overview

Twiga makes use of a RAG pipeline to provide teachers with customized educational exercises and resources. The chatbot simplifies the process of generating course-appropriate questions and exercises, ensuring they align with the Tanzanian national curriculum. The idea is that it can be used for a multitude of educational applications such as generating exams, lesson plans, searching for textbook info, etc.

## Key Features

-   **Custom Exercise Generation**: Twiga generates exercises that match the format of existing ones found in Tanzania's national examinations and textbooks.
-   **Easy Integration**: The chatbot is designed for seamless deployment on WhatsApp, making it easily accessible to teachers.
-   **Contextual Relevance**: Ensures that generated questions are answerable using knowledge from the textbooks and provide the appropriate level of challenge.

## Technical Development

The technical development of Twiga involved several key components:

-   **RAG Pipeline**: Implementing a sophisticated Retrieval-Augmented Generation system using rerankers, query-preprocessors, hybrid retrieval, and few-shot prompting.
-   **WhatsApp Integration**: Ensuring smooth deployment and user experience on the WhatsApp platform using Python Flask API.

## Field Study

![Field Study](assets/public-school.png)

I did a field study in Tanzanian secondary schools to test and conceptualize the chatbot. Teachers from various schools participated, providing valuable feedback that guided the development and enhancement of the chatbot. This field study was crucial in understanding the practical needs and challenges faced by educators in Tanzania.

## Collaborating Organizations

This project is now collaborative effort involving:

-   **KTH AI Society**: Leading the technical development of the Twiga chatbot.
-   **Tanzania AI Community**: Providing local insights, fundraising, and open-source contributions to ensure the chatbot meets the needs of Tanzanian educators.

## Get Involved

We are always looking for more insights and support to improve Twiga. If you're interested in contributing or learning more, please reach out!
