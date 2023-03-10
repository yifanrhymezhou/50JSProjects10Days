# 50 JS Projects in 10 Days
## 1. Flexbile Card Display
### What I've Learned in This Project
- JS: 

  **Array.from()** - transforms array-like objects to an Arraylist so that forEach can loop through the item list. 
  
  **[].filter.call()** - filters and selects all panels that are not currently clicked on, and then we can transfer the "active tag" to the currently selected panel.
  
- CSS:
  
  **text-shadow**


https://user-images.githubusercontent.com/107736520/211211816-bcd6fda7-b846-4b86-9fde-d062ceca5e2e.mp4

## 2. Classic Weather App (open weather API)

### What I've Learned in This Project
- JS:

  **Async Await**
  
  **JSONify the API data to display chosen weather data**

https://user-images.githubusercontent.com/107736520/211212479-f77b3bfd-13df-4a91-97a7-e73ca2c680d8.mp4

## 3. Dynamic Progress Bar
### What I've Learned in This Project
- JS:

  Unecessary for this widget but **writing nested functions and returning sub functions could be useful**.
  
  - Example:
  ```
  function handleClass(element){
    let methods = {
        addClass,
        removeClass
    };
    function addClass(n){
        element.classList.add(n);
        return methods;
    }
    function removeClass(n){
        element.classList.remove(n);
        return methods;
    }
    return methods;}
    ```
  **.style.width** - Change the style of an item 
  
  **toFixed(x)** - Converts a number to a string and round it to x decimals.
  
  **Calculating the length of the progress bar:**
  
  ```progress.style.width = (100 / max * currentActive).toFixed(4) + '%';```
    
- CSS:
  
  **var()** - uses a custom property set previously on :root
  
  ``` .root{--color--: #fff;} border: 4px solid var(--color--); ```
  
  **transition**
  ```div {  transition: <property> <duration> <timing-function> <delay>;}```
  
  **content -> border -> outline**
  
  **transform:**
  
  - Rotate, skew, translate (*reposition* an element in the horizontal and/or vertical directions), and scale (resize: eg: ```transform: scale(0.9)```)
  
  **::before / ::after** - used to add cosmetic content to an element with the content property.
  - Example1:
  
    <img width="400" alt="image" src="https://user-images.githubusercontent.com/107736520/211871509-3ca6e76f-ba1f-4614-88b5-8bb3dfb97e6b.png">
    
  - Example2 (Progress Bar Moving Underneath Circles)
    ```
    .progress, .progress-container::before {
    height: 5px;
    border-radius: 2px;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: -1;}

https://user-images.githubusercontent.com/107736520/211872451-097dabbe-2559-4d55-8d43-133b9adcec51.mp4


## 4. Movie App
### What I've Learned in This Project
- JS:

- CSS:


https://user-images.githubusercontent.com/107736520/211221026-aed08dc8-180e-414d-963f-988355722d3f.mp4


## 5. Hidden Search Bar
### What I've Learned in This Project
- JS: 
  
  **toggle()**
  
  ```searchContainer.classList.toggle('active');```

- CSS:

  **Differentiate Search-ACTIVE VS Search**
  
  **Search button moves Npx to make space for extended input: ```transform: translateX(355px);```**
  

https://user-images.githubusercontent.com/107736520/212398001-eda5e34d-b115-4b4e-926a-12b48a8698c1.mp4

## 6. Notes App
### What I've Learned in This Project
- JS:

- CSS: 

https://user-images.githubusercontent.com/107736520/212398777-fe082765-974f-425e-91ac-932861982595.mp4

## 7. Blurry Loading Animation
### What I've Learned in This Project
- JS:

- CSS:

## 8. FAQ Collapse
### What I've Learned in This Project
- JS:

- CSS: 

## 9. Animated Navigation
### What I've Learned in This Project
- JS:

- CSS:


## 10. Incrementing Counter
### What I've Learned in This Project
- JS:

- CSS:

