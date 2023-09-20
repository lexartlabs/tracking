export default () =>
  `<ul id="my_editor">
    <li><trix-toolbar id="my_toolbar"></trix-toolbar></li>
    <li><trix-editor toolbar="my_toolbar" input="my_input" autofocus placeholder="Say hello..."></trix-editor></li>
    <li><input id="my_input" type="hidden" value="&lt;div&gt;Hello world&lt;/div&gt;"></li>
  </ul>`
