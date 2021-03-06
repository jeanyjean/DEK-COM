function show_comment_reply() {
    var btn = document.getElementById("show-comment-reply");
    var text_area = document.getElementById("comment-reply");
    if (text_area.style.display == "none") {
        text_area.style.display = "";
        btn.innerHTML = "hide..";
    }
    else {
        text_area.style.display = "none";
        btn.innerHTML = "write comment..";
    }
}

function show_subcomment_reply(_show) {
    var btn = _show;
    var text_area = btn.parentElement.nextElementSibling;
    console.log(text_area)
    if (text_area.style.display == "none") {
        text_area.style.display = "";
        btn.innerHTML = "hide..";
    }
    else {
        text_area.style.display = "none";
        btn.innerHTML = "reply comment..";
    }
}

function add_tag() {
    var tag_name = document.getElementById("tag-input").value.trim();
    document.getElementById("tag-input").value = "";
    var num = document.getElementById("tags-container").childElementCount;
    var tag = document.createElement("input");
    tag.setAttribute("type", "text");
    tag.setAttribute("name", "tag[" + String(num) + "]");
    tag.setAttribute("value", tag_name);
    tag.style.display = "none";
    
    var tag_display = document.createElement("div");
    tag_display.classList.add("tag-display");
    tag_display.id = tag_name
    tag_display.innerHTML = `<label>` + tag_name + `</label><div onclick="delete_tag('` + tag_name +`')">&#10006;</div>`

    tag_display.append(tag);


    document.getElementById("tags-container").append(tag_display);
}

function delete_tag(tag_id) {
    var tag = document.getElementById(tag_id);
    document.getElementById("tags-container").removeChild(tag);
}

function add_choice() {
    var num = document.getElementById("choices-container").childElementCount;
    var choice = document.createElement("input");
    choice.setAttribute("name", "choice[" + String(num) + "]");
    
    var choice_display = document.createElement("div");
    choice_display.classList.add("choice-display");
    choice_display.id = 'choice' + String(num)
    choice_display.append(choice);
    choice_display.innerHTML += `<div onclick="delete_choice('choice` + String(num) + `')">  &#10006;</div>`;

    document.getElementById("choices-container").append(choice_display);
} 

function delete_choice(choice_id) {
    var choice = document.getElementById(choice_id);
    document.getElementById("choices-container").removeChild(choice);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }