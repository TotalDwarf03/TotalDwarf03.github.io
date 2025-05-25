function toggle_display(element){
    header = element.getElementsByTagName("header")[0];
    card = element.getElementsByTagName("div")[0]
    display = getComputedStyle(card).display;

    if (display == "none") {
        card.style.display = "block";
        
        // Get the header text
        header_text = header.innerText;

        // Replace [Expand] with [Collapse]
        header.innerText = header_text.replace(" [Expand]", " [Collapse]");
    }
    else {
        card.style.display = "none";

        // Get the header text
        header_text = header.innerText;

        // Replace [Collapse] with [Expand]
        header.innerText = header_text.replace(" [Collapse]", " [Expand]");
    }
}