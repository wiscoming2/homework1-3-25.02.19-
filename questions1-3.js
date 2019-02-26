//START!!

//QUASTION 1+2 (caulator)
<html>
    <head>
        <title>html rocks!!</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
    </head>
    <body>
        <p> a =<input type="number" id="ainput"/></p>
        <p> b =<input type="number" id="binput"/></p>
        <button onclick="add()">add</button>
        <button onclick="multiply()">multiply</button>
        <button onclick="minus()">minus</button>
        <button onclick="divide()">divide</button>
        <button onclick="WHOSbigger()">WHOSbigger</button>
    </body>
    <script>
        function add()
        {
            var a = parseInt($('#ainput').val())
            var b = parseInt($('#binput').val())
            alert(a + b)
        }
        function multiply()
        {
            var a = parseInt($('#ainput').val())
            var b = parseInt($('#binput').val())
            alert(a * b)
        }
        function minus()
        {
            var a = parseInt($('#ainput').val())
            var b = parseInt($('#binput').val())
            alert(a - b)
        }
        function divide()
        {
            var a = parseInt($('#ainput').val())
            var b = parseInt($('#binput').val())
            if(b > 0)
            {
                alert(a / b)
            }
            else
            {
                alert("cannot divide by zero")
            }
        }
        function WHOSbigger()
        {
            var a = parseInt($('#ainput').val())
            var b = parseInt($('#binput').val())
            if(a == b)
            {
                alert ("equal")
            }
            else
            {
                if(a > b)
                {
                    alert("a is bigger")
                }
                else
                {
                    alert("b is bigger")
                }
            }
        }
    </script>
</html>
//QUESTION 1+2 (caulator)

//QUESTION 3
<html>
    <head>
        <title>homework.qua num2</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script>
    </head>
    <body>
        <p> name =<input type="text" id="nameinput"/></p>
        <p> lastname =<input type="text" id="lastnameinput"/></p>
        <p> birthday =<input type="date" id="dateinput"/></p>
        <button onclick="USERinfo()">USERinfo</button>
    </body>
    <script>
        function USERinfo()
        {
            var a =$('#nameinput').val()
            var b =$('#lastnameinput').val()
            var c =$('#dateinput').val()
            alert(a+" "+" "+b+" "+c)
        }
    </script>
</html>
//QUESTION 3

//QUESTION 4 (challenge)
<html>
    <head>
        <title>Question 3-challenge</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script>
    </head>
    <body>
        <p> a = <input type="number" id="ainput"/></p>
        <button onclick="puts_sum()">puts-a in sum</button>
        <button onclick="PRINTS_SUM()">SUMvalue</button>
    </body>
    <script>
        var sum = 0
        function puts_sum()
        {
            var x = parseInt($('#ainput').val())
            sum = x
        }
        function PRINTS_SUM()
        {
            alert(sum)
        }
    </script>
</html>
//QUESTION 4 (challenge)

//END!!
