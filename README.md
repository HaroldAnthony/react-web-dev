# harrystore

My React.js-powered e-commerce platform (hopefully this builds up into a proper, dynamic project that I can envision and aggressively manifest).

<br>

<b>26-07-2024 12:47</b> - I had performed the terminal command <b><i>"npx create-react-app myapp"</i></b>, which resulted in an error. Turns out I had performed <b><i>"npm install create-react-app"</i></b> (which only installs the framework locally, for the previous project), instead of <b><i>"npm install -g create-react-app"</i></b> , where the -g flag installs it globally, so I rectified the problem.
<p>I also performed the appropriate deletions and editing, to conform to the React folder structure that is actually required, and voila! First day went well!</p>

<br>

<b>08-08-2024 13:36</b> - The following activities were completed by the 8th of August, 2024 - 
<p><b>1) Camelcase naming - </b>The individual component files, to be integrated into <b>App.js</b>, were appropriately converted to Camelcase, to avoid errors with the usual lowercase HTML tags.</p>
<p><b>2) JSX conversion - </b>The .js files were appropriately converted into .jsx files, for React compatibility.</p>
<p><b>3) CSS integration - </b>The <b>"class"</b> to <b>"className"</b> conversion was performed, and separate components folder + separate .js+.css file pairs were created.</p>
<p><b>4) Identical className error - </b>conversion of naming into (eg)- <b>header.module.css</b> + conversion of import into (eg)- <b>import styles from "./header.module.css"</b> + conversion of className into (eg)- <b>className = {styles.header}</b>, to avoid this specific error.</p>

<br>



