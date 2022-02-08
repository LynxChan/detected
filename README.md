# detected
Adds the (((detected))) markup/markdown to LynxChan 2.7

<b>Installation instructions:</b>

1. Go to ``/LynxChan/src/be/addons/``
2. Git clone this repository
3. You now have a folder called 'detected' in your addons folder
4. Go to the Global Settings, find the 'Addons' array near the bottom and enter ``detected`` there, then Save the settings
5. Add this to your global.css file:
``span.detected {
  background: #FFF;
  color: #3060A8;
}``
6. Restart Lynxchan from your server terminal. Then refresh the engine to refresh the CSS (``lynxchan -rfe -nd``)
7. That's it, whenever you type a word or sentence within triple left and right parentheses, (((like this))), it will use the 'detected' class. 
