module.exports = class Game
{
    constructor()
    {
        this.flag = 0;
    }
    makeAMove(sInput)
    {
        if(this.flag==0)
        {
            this.flag=1;
            return [`Do you want to test your knowledge on 2018 fifa world cup starting from quater finals. Y or N`];
        }
        else if(this.flag==1)
        {
            if(sInput.toLowerCase().match("y")){
                this.flag=2;
                return[`Let us start with guessing results of Quater Finals, answer with the country won in the following match ups, press ok to continue.`];}
            else if(sInput.toLowerCase().match("n")){
                this.flag=0;
            }
            else{
                this.flag=0;
                return[`Please select between Y or N`];
            }
        }
        else if (this.flag==2)
        {
            this.flag=3;
            return[`Quater Finals 1 - URUGUAY vs FRANCE`];
        }
        else if(this.flag==3)
        {
            if(sInput.toLowerCase().match("france")){
                this.flag=4;
                return[`you got it right, now press ok for next question`];}
            else if(sInput.toLowerCase().match("uruguay")){
                this.flag=3;
                return['you are wrong, please try again'];
            }
            else{
                this.flag=3;
                return[`Please enter a valid input`]
            }
        }
        else if (this.flag==4)
        {
            this.flag=5;
            return[`Quater Finals 2 - BRAZIL vs BELGIUM`];
        } 
        else if(this.flag==5)
        {
            if(sInput.toLowerCase().match("belgium")){
                this.flag=6;
                return[`you got it right, now press ok for next question`];}
            else if(sInput.toLowerCase().match("brazil")){
                this.flag=5;
                return['you are wrong, please try again'];
            }
            else{
                this.flag=5;
                return[`Please enter a valid input`]
            }
        }
        else if (this.flag==6)
        {
            this.flag=7;
            return[`Quater Finals 3 - RUSSIA vs CROATIA`];
        } 
        else if(this.flag==7)
        {
            if(sInput.toLowerCase().match("croatia")){
                this.flag=8;
                return[`you got it right, now press ok for next question`];}
            else if(sInput.toLowerCase().match("russia")){
                this.flag=7;
                return['you are wrong, please try again'];
            }
            else{
                this.flag=7;
                return[`Please enter a valid input`]
            }
        }
        else if (this.flag==8)
        {
            this.flag=9;
            return[`Quater Finals 4 - SWEDEN vs ENGLAND`];
        } 
        else if(this.flag==9)
        {
            if(sInput.toLowerCase().match("england")){
                this.flag=10;
                return[`you got it right, now let us move on to Semi-Finals, press ok to continue`];}
            else if(sInput.toLowerCase().match("sweden")){
                this.flag=9;
                return['you are wrong, please try again'];
            }
            else{
                this.flag=9;
                return[`Please enter a valid input`]
            }
        }
        else if (this.flag==10)
        {
            this.flag=11;
            return[`Semi Finals 1 - FRANCE vs BELGIUM`];
        } 
        else if(this.flag==11)
        {
            if(sInput.toLowerCase().match("france")){
                this.flag=12;
                return[`you got it right, now press ok for next question`];}
            else if(sInput.toLowerCase().match("belgium")){
                this.flag=11;
                return['you are wrong, please try again'];
            }
            else{
                this.flag=11;
                return[`Please enter a valid input`]
            }
        }
        else if (this.flag==12)
        {
            this.flag=13;
            return[`Semi Final 2 - CROATIA vs ENGLAND`];
        } 
        else if(this.flag==13)
        {
            if(sInput.toLowerCase().match("croatia")){
                this.flag=14;
                return[`you got it right, now let us move on to Finals, press ok to continue`];}
            else if(sInput.toLowerCase().match("england")){
                this.flag=13;
                return['you are wrong, please try again'];
            }
            else{
                this.flag=13;
                return[`Please enter a valid input`]
            }
        }
        else if (this.flag==14)
        {
            this.flag=15;
            return[`Finals - FRANCE vs CROATIA`];
        } 
        else if(this.flag==15)
        {
            if(sInput.toLowerCase().match("france")){
                this.flag=16;
                return[`you got the 2018 fifa world cup winner, press 'Y' to retake the test`];}
            else if(sInput.toLowerCase().match("croatia")){
                this.flag=15;
                return['you are wrong, please try again'];
            }
            else{
                this.flag=15;
                return[`Please enter a valid input`]
            }
        }
        else if(this.flag==16)
        {
            if(sInput.toLowerCase().match("y")){
                this.flag=2;
                return[`Let us start with guessing results of quater finals, answer with the country won in the following match ups, press ok to continue.`];}
            else if(sInput.toLowerCase().match("N")){
                this.flag=0;
            }
            else{
                this.flag=0;
                return[`Please select between Y or N`];
            }
        }
    }
}









