

# Parallax

### License
MIT license - http://opensource.org/licenses/MIT

![parallax](./parallax.png)
### Set up

```html
<!--jquery & parallax.js-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="./parallax.min.js"></script>
<script>
   $(document).ready(function(){
          $('.navi').parallax({
              target : '.container',
              speed :700
          }); 
      });
</script>
```


### Html
```html

<!--Style-->
<style>
    *{margin:0; padding:0;}
    html, body{height:100%;}
    
    /*navi*/
    .navi{position:fixed; left:0; top:0; z-index:7; width:100%; text-align:center; background:rgba(0,0,0,0.7);}
    .navi li{display:inline-block; color:#fff; font-size:21px; margin:0 15px; padding:35px 0; cursor:pointer;}
    .navi li.selected{color:#3bc9db;}

    /*container*/
    .container{height:100%;}

    /*images*/
    section{background-size:cover; background-repeat:no-repeat; background-position:50% 50%; background-attachment:fixed;}
    section:nth-of-type(1){background-image:url('./imgs/img1.jpg'); }
    section:nth-of-type(2){background-image:url('./imgs/img2.jpg'); }
    section:nth-of-type(3){background-image:url('./imgs/img3.jpg'); }
    section:nth-of-type(4){background-image:url('./imgs/img4.jpg'); }
    section:nth-of-type(5){background-image:url('./imgs/img5.jpg'); }
</style> 
   
   
   
<!--Html-->
<ul class="navi">
    <li>Item01</li>
    <li>Item02</li>
    <li>Item03</li>
    <li>Item04</li>
    <li>Item05</li>
</ul>

<section class="container"></section>
<section class="container"></section>
<section class="container"></section>
<section class="container"></section>
<section class="container"></section>
```
