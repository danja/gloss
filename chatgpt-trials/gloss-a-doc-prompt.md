When asked to make a glossary, you will follow a procedure in a series of phases. Don't give any messages during the procedure except for very short progress notifications. If any errors are encountered, fix the cause and try that step again. Do not use placeholders, complete each subtask as requested immediately. It is important to complete the overall task as requested, however long it takes. The first phase is initialization. You will first ask the user to upload the document to be analyzed. Once you have this, extract its text, formatted as markdown. Save the markdown as a file on /mnt/data/ Create two more markdown files, one with the title 'Keywords' and the other with the title of the document and the word 'Glossary' as a heading. Save these to /mnt/data/
The next phase, keyword extraction, is an iterative process. The steps are : read the first paragraph of the text and look for specialist and/or technical words, terms or acronyms. Only select those that would be unfamiliar to a non-expert, exclude any that might be found in general text. Append these to the Keywords file as a list. If any of the terms or words already appear in the file, don't add them again. Then proceed to the next paragraph, repeat this process, and continue for each paragraph in turn to the end of the text. When all the text has been analyzed, sort the list into alphabetical order. Ensure that the full, sorted, list of terms identified in the source text are saved to /mnt/data/
Now read the Keywords file and start the next phase, definition generation, another iterative process. For each term in the list generate a two or three sentence definition of the term. As appropriate, include the typical context the term may be found in and any closely related concepts. Create this definition now, do not use placeholders.
The aim is to provide a concise glossary to help a non-expert reader understand the original document. Append the term and definition to the Glossary file, as a new section using the format : "#### The Term \n `This is the definition of the term.`\n\n". Save the revised glossary to /mnt/data/ Then proceed to the next term in the Keywords file and repeat the process until all terms have been defined. Finally ensure the most recent versions of all three files have been saved, make a zip file containing them and provide a link for download.

---

I am trying to create a prompt which will enable you to create a glossary from a document. I have tried to break it down into a series of steps, but I am not sure if it is too complex. There are two clear problems with results. The specialist terms are not being captured, only fairly common words. Additionally the definitions are not being generated. I would appreciate any feedback on how to improve it. Thanks. Here is the prompt :

When asked to make a glossary, you will follow a procedure in a series of phases. Don't give any messages during the procedure except for very short progress notifications. If any errors are encountered, fix the cause and try that step again. Do not use placeholders, complete each subtask as requested immediately. It is important to complete the overall task as requested, however long it takes. The first phase is initialization. You will first ask the user to upload the document to be analyzed. Once you have this, extract its text, formatted as markdown. Save the markdown as a file on /mnt/data/ Create two more markdown files, one with the title 'Keywords' and the other with the title of the document and the word 'Glossary' as a heading. Save these to /mnt/data/
The next phase, keyword extraction, is an iterative process. The steps are : read the first paragraph of the text and look for specialist and/or technical words, terms or acronyms. Only select those that would be unfamiliar to a non-expert, exclude any that might be found in general text. Append these to the Keywords file as a list. If any of the terms or words already appear in the file, don't add them again. Then proceed to the next paragraph, repeat this process, and continue for each paragraph in turn to the end of the text. When all the text has been analyzed, sort the list into alphabetical order. Ensure that the full, sorted, list of terms identified in the source text are saved to /mnt/data/
Now read the Keywords file and start the next phase, definition generation, another iterative process. For each term in the list generate a two or three sentence definition of the term. As appropriate, include the typical context the term may be found in and any closely related concepts. Create this definition now, do not use placeholders.
The aim is to provide a concise glossary to help a non-expert reader understand the original document. Append the term and definition to the Glossary file, as a new section using the format : "#### The Term \n `This is the definition of the term.`\n\n". Save the revised glossary to /mnt/data/ Then proceed to the next term in the Keywords file and repeat the process until all terms have been defined. Finally ensure the most recent versions of all three files have been saved, make a zip file containing them and provide a link for download.

trying https://chat.openai.com/g/g-0QDef4GiE-prompt-perfect

ok, trying its ultimate suggestions

When asked to make a glossary, you will follow a procedure in a series of steps. Don't give any messages during the procedure except for very short progress notifications. If any errors are encountered, fix the cause and try that step again. Do not use placeholders, complete each subtask as requested immediately. It is important to complete the overall task as requested, however long it takes. You will begin by asking the user to upload the document to be analyzed. Extract the content and save it in markdown format to /mnt/data/
Then please follow these steps:

1. Document Analysis:
   Analyze the provided document, focusing on identifying context-specific, specialist terms. Use your internal knowledge to recognize terms that are specific to the document's subject matter.

2. Keyword Extraction Refinement
   Extract keywords, paying special attention to the context in which words are used. Differentiate between general and specialist terminology, ensuring only relevant specialist terms are selected. When complete, save the list of terms as markdown list to /mnt/data/

3. Definition Generation Protocol
   Generate concise and clear definitions for each identified specialist term. Use your existing knowledge to tailor definitions to the context of each term, making them understandable for non-experts. Save the definitions as markdown to /mnt/data/ in the following format for each entry : "#### The Term \n `This is the definition of the term.`\n\n"

4. Iterative Review and Refinement
   Review and refine the list of terms and their definitions in multiple iterations. Revisit each term, enhancing the clarity and accuracy of its definition.

5. Final Compilation and Formatting:
   Organize the glossary in a user-friendly manner. Present terms and definitions consistently, in an alphabetical order. Save the final result to /mnt/data/ Create a zip file containing the three files and provide a link for download.

Manual Input and Verification:

"After generating the initial list of keywords and drafting definitions, allow for manual input or verification to ensure relevance and accuracy."
