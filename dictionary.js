fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello").then(Response=>Response.json())
                                                              .then(value=>console.log(value))

 //synonyms->value[0].meanings[0].synonyms[0]


 async function display()
 {
    const input=document.getElementById("input").value.toLowerCase();
    try{
        const Response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);

        if(!Response.ok)
        {
            throw new Error("kya kar raha hai bhai tu...");
        }
        const Result_container=document.querySelector(".result");
        Result_container.style.display="block";
        const data=await Response.json();

        const Example_Element=document.getElementById("Example");
        const Synonyms_Element=document.getElementById("Synonyms");
        const audio=document.getElementById("audio")
        const word_Elemenet=document.getElementById("word");
        const Interjection_E1=document.getElementById("Interjection_E1");
        const Interjection_E2=document.getElementById("Interjection_E2");
        const link=document.getElementById("link");


        const Example_data=data[0].meanings[0].definitions[0].definition;
        Example_Element.innerHTML+=Example_data;

        const Synonyms_data=data[0].meanings[0].synonyms[0];
        Synonyms_Element.innerHTML+=Synonyms_data;

        const audio_url=data[0].phonetics[0].audio;
        audio.src=audio_url;

        const word_data=data[0].word;
        word_Elemenet.innerHTML=word_data;

        const Interjection_D1=data[0].meanings[2].definitions[0].definition;
        Interjection_E1.innerHTML+=Interjection_D1;

        const Interjection_D2=data[0].meanings[2].definitions[1].definition;
        Interjection_E2.innerHTML+=Interjection_D2;
        
        const link_data=data[0].sourceUrls[0];
        link.href=link_data;



    }
    catch(err)
    {
        console.error(err);
    }
 }
