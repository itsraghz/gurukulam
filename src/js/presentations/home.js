import { html } from 'lit-html';

export let home = html`<div class="reveal">
<div class="slides">
    <!-- slide 1 content -->

    <section data-auto-animate>
        <h3>C Programming</h3>

        <p>
            <small>Created by - Guruvammal.S,M.E,PhD</small>
        </p>
    </section>

    <!-- slide 2 content -->
    <section data-auto-animate data-transition="convex">
        <h2>References:</h2>
        <ul>
            <li>Yeshavant P Kanetkar, “Let US C”, 5th Edition</li>
            <li>Source Code: <a href="https://kicit.com/books/letusc/sourcecode">
                    https://kicit.com/books/letusc/sourcecode</a>
            <li>Solutions:<br \> Yeshavant P Kanetkar, ”Let US C Solutions”,
                5th Edition.</li>
            <li>Programs: <a href="https://www.programiz.com/">https://www.programiz.com/</a></li>
        </ul>

    </section>

    <!-- slide 3 content -->
    <section data-auto-animate data-transition="convex">
        <h4>What is ‘C’?</h4>
        <ul>
            <li>C is a programming language.</li>
            <li>Developed at AT & T Bell Laboratory, USA, 1972.</li>
            <li>Designed and written by ‘Dennis Ritchie’.</li>
        </ul>
        <h4>‘C’ language is popular for:</h4>
        <ul>
            <li>It is reliable.</li>
            <li>Simple and easy to use.</li>
        </ul>
    </section>

    <!-- slide 4 content -->
    <section data-auto-animate data-transition="convex">
        <h4>Comparison of learning English Language and ‘C’
            language</h4>
        <h5>English:</h5>
        <p>Alphabets -> Words -> Sentences -> Paragraphs</p>
        <h5>"C"</h5>
        <p>Alphabets, Constants</p>
        <p>Digits-> Variables -> Instruction -> Programs</p>
        <p>Special symbols, Keywords</p>
    </section>

    <!-- slide 5 content -->
    <section data-auto-animate data-transition="convex">
        <h3>Programs</h3>
        <ol>
            <li>Program to find the sum of two given numbers</li>
            <li>Program to swap the contents of two variables</li>
            <li>Program for simple interest calculation</li>
            <li>Program to compute the area of a circle given its
                radius</li>
            <li>Program to compute the area of triangle given its
                sides</li>
            <li>Extracting the unit’s digit of a given integer
                number</li>
            <li>Finding the largest of the given two numbers</li>
        </ol>
    </section>

    <!-- slide 6 content -->
    <section data-auto-animate data-transition="convex">
        <h3>Programs</h3>
        <ol>
            <li>To find out whether a given integer is zero, +ve (or) –ve.</li>
            <li>Determining whether a given integer is odd or even.</li>
            <li>Program to find biggest of the three numbers.</li>
            <li>Program to determine if a year is a leap year or not.</li>
            <li>To find the roots of a given quadratic equation.</li>
            <li>Program to compute total marks and average marks of
                five subjects.</li>
            <li>C program to convert Fahrenheit to Celsius.</li>
        </ol>
    </section>

    <!-- slide 7 content -->
    <section data-auto-animate data-transition="convex">
        <h3>Programs</h3>
        <ol>
            <li>Program for determining whether a given number is
                prime or not.</li>
            <li>Write a C program to calculate electricity bill.</li>
        </ol>
    </section>

    <!-- slide 8 content -->
    <section data-auto-animate data-transition="convex">
        <h3>Programs</h3>
        <h6>1. Program to find the sum of two given numbers</h6>
        <pre>
            <code data-trim data-noescape>
                   #include <conio.h>
                    #include <stdio.h>
                    intain()
                    {
                    int a,b,sum;
                    clrscr(); 
                    printf(“\n Enter two numbers \n”);
                    scanf(“%d%d”, &a, &b);
                    printf(“\n a=%d\t b=%d\n”, a, b);
                    sum=a+b;
                    printf(“sum=%d\n”, sum);
                    }
            </code>
        </pre>
    </section>


    <!-- slide 9 content -->
    <section data-auto-animate data-transition="convex">
        <h3>Programs</h3>
        <h6>2. Program to swap the contents of two variables</h6>
        <pre><code data-trim data-noescape>
                #include<conio.h>
                #include<stdio.h>
                int main()
                {
                int a,b,temp;
                clrscr();
                printf(“\nEnter two numbers”);
                scanf(“%d%d”, &a, &b);
                printf(“\n a=%d\tb=%d”, a, b);
                temp=a;
                a=b;
                b=temp;
                printf(“\n After swapping \n a=%d\tb=%d”, a, b);
                }
            </code> </pre>
    </section>
    <section>
        <p>Thank you</p>
    </section>



</div>
</div> `;
