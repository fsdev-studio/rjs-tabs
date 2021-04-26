# About
rjs-tabs is a tabs component for react web apps.


## Getting Started

Install with npm:
``` npm i rjs-tabs```
Install with yarn
```yarn add rjs-tabs```

## Include in your project
```javascript
import Tabs from 'rjs-tabs/Tabs';
```

```javascript
<Tabs
tabs={[{label:'Tab One',tab:<TabOne/>},{label:'Tab Two',tab:<TabTwo/>},{label:'Tab Three',tab:<TabThree/>}]}
whenActive={{color:"#FF55FF", fontWeight:'bold',textDecoration:'underline'}}
whenInActive={{color:"green",fontWeight:"bold"}}
labelContainer={{display:'flex', width:300}}
tabContainer={{height:'auto', width:300,padding:3}}
type={'classic'}
/>
```

## Props
Props | Details  |  Examples
-------------------- | ------------------------- | ----------------------------------------
tabs| array of objects |  [{label:'Tab One',tab:<TabOne/>},{label:'Tab Two',tab:<TabTwo/>},{label:'Tab Three',tab:<TabThree/>}]
whenActive | active style for label | {color:"#FF55FF", fontWeight:'bold',textDecoration:'underline'}
whenInActive | inactive style for label | {color:"green",fontWeight:"bold"}
labelContainer | label row/column style| {display:'flex', width:300}
tabContainer | tab container style |{height:'auto', width:300,padding:3}
type |type of tabs. can be one of: classic or pill |'classic'

[Examples](https://fsdev.studio)
