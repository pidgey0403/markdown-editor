const heading2 = "\n## Made with \u2764 using React-Redux and the Marked library";
const inlineCode = "\n`console.log('Highlight your code...')`";
const codeBlock = "\n\n```code block!!```";
const bulletPoints = "\n\n List items, like your favorite desserts: \n - macaroons \n - cheesecake \n - caramel fudge "
const image = "\n\n Include images of what makes you happy.. \n![image](https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg)"
const callout = "\n> | Emphasize important information";
const link = "\n\n Checkout cool [websites](https://github.com/pidgey0403) (definitely not my GitHub) ";


const defState = "# A _responsive_ text to HTML parser" +heading2 + inlineCode + bulletPoints+ callout +image + link ;
 
const rootReducer = (state=defState,action) => {
    switch(action.type){
        case 'UPDATING': 
            return action.display;
        default: return state;
    };
};

export default rootReducer;