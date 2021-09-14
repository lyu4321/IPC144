(self.webpackChunkipc_144=self.webpackChunkipc_144||[]).push([[285],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),k=i,g=p["".concat(s,".").concat(k)]||p[k]||u[k]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8928:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),l=["components"],o={sidebar_position:3},s="Data Conversions",d={unversionedId:"Resources-Appendices/data-conversions",id:"Resources-Appendices/data-conversions",isDocsHomePage:!1,title:"Data Conversions",description:"Learning Outcomes",source:"@site/docs/Resources-Appendices/data-conversions.md",sourceDirName:"Resources-Appendices",slug:"/Resources-Appendices/data-conversions",permalink:"/Resources-Appendices/data-conversions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Resources-Appendices/data-conversions.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"courseNotesSidebar",previous:{title:"EBCDIC Collating Sequence",permalink:"/Resources-Appendices/ebcdic-collating-sequence"},next:{title:"Operator Precedence",permalink:"/Resources-Appendices/operators"}},c=[{value:"Learning Outcomes",id:"learning-outcomes",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Binary - Hexadecimal",id:"binary---hexadecimal",children:[{value:"Binary to Hexadecimal",id:"binary-to-hexadecimal",children:[]},{value:"Hexadecimal to Binary",id:"hexadecimal-to-binary",children:[]}]},{value:"Decimal - Binary",id:"decimal---binary",children:[]},{value:"Program Instructions (optional)",id:"program-instructions-optional",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-conversions"},"Data Conversions"),(0,a.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,a.kt)("p",null,"After reading this section, you will be able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to convert between binary and hexadecimal notation"),(0,a.kt)("li",{parentName:"ul"},"How to convert between binary and decimal notation")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"A C program at machine-level is an assembly language program.  Assembly language uses hexadecimal representation for data.  The hardware itself processes information in bits.  When a program outputs data in hexadecimal or binary form, we may prefer to convert it into decimal form. "),(0,a.kt)("p",null,"This chapter describes how to convert across binary, hexadecimal and decimal representations and shows what a trivially simple program looks like in binary and hexadecimal representations."),(0,a.kt)("h2",{id:"binary---hexadecimal"},"Binary - Hexadecimal"),(0,a.kt)("p",null,"The most convenient base for storing byte-wise information is hexadecimal (base 16).  Two hexadecimal (base 16) digits can represent one byte of information.  Each hexadecimal digit represents 4 bits of binary information. "),(0,a.kt)("p",null,"For example, the hexadecimal value 0x5C is equivalent to the binary 010111002.  The 0x prefix identifies the number as hexadecimal notation.  The digits in the hexadecimal number system are {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}.  The characters A through F denote decimal values 10 through 15 respectively."),(0,a.kt)("h3",{id:"binary-to-hexadecimal"},"Binary to Hexadecimal"),(0,a.kt)("p",null,"To convert a binary number to its hexadecimal equivalent, we:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"group the bits into nibbles,"),(0,a.kt)("li",{parentName:"ol"},"assign powers of 2 to the different bits in each nibble,"),(0,a.kt)("li",{parentName:"ol"},"multiply each bit value by the corresponding power of 2,"),(0,a.kt)("li",{parentName:"ol"},"add the products together for each nibble, and"),(0,a.kt)("li",{parentName:"ol"},"concatenate the nibble results")),(0,a.kt)("p",null,"Consider the 8-bit number ",(0,a.kt)("strong",{parentName:"p"},"01011100",(0,a.kt)("sub",null,"2")),":"),(0,a.kt)("table",{border:"0"},(0,a.kt)("tr",null,(0,a.kt)("td",null,"Nibble #"),(0,a.kt)("td",{colspan:"4",align:"center"},"1"),(0,a.kt)("td",{colspan:"4",align:"center"},"0")," "),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Bit #"),(0,a.kt)("td",{align:"center"},"7"),(0,a.kt)("td",{align:"center"},"6"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0")," "),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Multiplier"),(0,a.kt)("td",{align:"center"},"8"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"8"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1")," "),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contents"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"0")," "),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Nibble Values"),(0,a.kt)("td",{colspan:"4",align:"center"},"0*8 + 1*4 + 0*2 + 1*1 = 0x5"),(0,a.kt)("td",{colspan:"4",align:"center"},"1*8 + 1*4 + 0*2 + 1*0 = 0xC")," "),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Byte Value"),(0,a.kt)("td",{colspan:"8",align:"center"},"0x5C")," ")),(0,a.kt)("h3",{id:"hexadecimal-to-binary"},"Hexadecimal to Binary"),(0,a.kt)("p",null,"To convert a hexadecimal number into its binary equivalent, we work from the lowest order bit to the highest.  We identify the lowest order bit as the first target bit, then:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"divide by 2,"),(0,a.kt)("li",{parentName:"ul"},"put the remainder into the target bit,"),(0,a.kt)("li",{parentName:"ul"},"change the target to the next higher order bit")),(0,a.kt)("p",null,"... and repeat the above until there are no more bits.  "),(0,a.kt)("p",null,"Consider the hexadecimal number ",(0,a.kt)("strong",{parentName:"p"},"0x5C"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identify the first target bit as bit 0"),(0,a.kt)("li",{parentName:"ul"},"Divide the number (0x5C) into left and right hexadecimal digits"),(0,a.kt)("li",{parentName:"ul"},"Take the right digit (0xC), divide it by 2 and put the remainder (0) in bit 0"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x6), divide it by 2 and put the remainder (0) in bit 1"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x3), divide it by 2 and put the remainder (1) in bit 2"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x1), divide it by 2 and put the remainder (1) in bit 3"),(0,a.kt)("li",{parentName:"ul"},"Take the left hexadecimal digit (0x5), divide it by 2 and put the remainder (1) in bit 4"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x2), divide it by 2 and put the remainder (0) in bit 5"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x1), divide it by 2 and put the remainder (1) in bit 6"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x0), divide it by 2 and put the remainder (0) in bit 7")),(0,a.kt)("table",{border:"0"},(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit#"),(0,a.kt)("td",{align:"center"},"7"),(0,a.kt)("td",{align:"center"},"6"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0")," "),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Byte Value"),(0,a.kt)("td",{colspan:"8",align:"center"},"0x5C")," "),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Nibble Values"),(0,a.kt)("td",{colspan:"4",align:"center"},"0x5"),(0,a.kt)("td",{colspan:"4",align:"center"},"0xC")," "),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Divide by 2"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"6")," "),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit Values"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"0")," ")),(0,a.kt)("h2",{id:"decimal---binary"},"Decimal - Binary"),(0,a.kt)("p",null,"To convert a non-negative integer into its binary equivalent, we start with the value and an empty container that consists of target bits.  We take the integer value, identify the lowest order bit in the container as our target bit, and then:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"divide the value by 2,"),(0,a.kt)("li",{parentName:"ul"},"store the remainder in the target bit,"),(0,a.kt)("li",{parentName:"ul"},"take the result as the new integer value,"),(0,a.kt)("li",{parentName:"ul"},"identify the next higher-order bit our new target bit, and"),(0,a.kt)("li",{parentName:"ul"},"repeat this set of instructions until no value is left")),(0,a.kt)("p",null,"Consider the value ",(0,a.kt)("strong",{parentName:"p"},"92"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identify the target bit as bit numbered 0"),(0,a.kt)("li",{parentName:"ul"},"Take ",(0,a.kt)("strong",{parentName:"li"},"92"),", divide it by 2 and put the remainder (",(0,a.kt)("strong",{parentName:"li"},"0"),") in bit 0"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"46"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"0"),") in bit 1"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"23"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"1"),") in bit 2"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"11"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"1"),") in bit 3"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"5"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"1"),") in bit 4"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"2"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"0"),") in bit 5"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"1"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"1"),") in bit 6"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"0"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"0"),") in bit 7")),(0,a.kt)("table",{border:"0"},(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit#"),(0,a.kt)("td",{align:"center"},"7"),(0,a.kt)("td",{align:"center"},"6"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0")," "),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Value"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"11"),(0,a.kt)("td",{align:"center"},"23"),(0,a.kt)("td",{align:"center"},"46"),(0,a.kt)("td",{align:"center"},"92")," "),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit Values"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"0")," ")),(0,a.kt)("p",null,"(Eight bits and right to left bit numbering are for brevity and illustrative purposes only.) "),(0,a.kt)("p",null,"To convert a binary number into its decimal equivalent, we multiply the value in each bit by its corresponding power of 2 and add the products together."),(0,a.kt)("p",null,"Consider the 8-bit binary number ",(0,a.kt)("strong",{parentName:"p"},"01011100",(0,a.kt)("sub",null,"2")),":"),(0,a.kt)("table",{border:"0"},(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit #"),(0,a.kt)("td",{align:"center"},"7"),(0,a.kt)("td",{align:"center"},"6"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0")," "),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Power of 2"),(0,a.kt)("td",{align:"center"},"7"),(0,a.kt)("td",{align:"center"},"6"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0")," "),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit Values"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"0")," "),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Multiplier"),(0,a.kt)("td",{align:"center"},"128"),(0,a.kt)("td",{align:"center"},"64"),(0,a.kt)("td",{align:"center"},"32"),(0,a.kt)("td",{align:"center"},"16"),(0,a.kt)("td",{align:"center"},"8"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1")," "),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Byte Value"),(0,a.kt)("td",{colspan:"8",align:"center"},"0*128 + 1*64 + 0*32 + 1*16 + 1*8 + 1*4 + 0*2 + 0*1 = 92"))),(0,a.kt)("h2",{id:"program-instructions-optional"},"Program Instructions (optional)"),(0,a.kt)("p",null,"A program instruction consists of an operation and possibly some operands.  Each instruction performs an operation on its operands or on values stored in operand addresses.  The addresses are either register names or addresses in primary memory."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/instruction.png",alt:null})),(0,a.kt)("p",null,'The set of instructions in binary on a Windows 7 machine for a program that displays the phrase "This is C" looks like:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"10110100 00001001\n10111010 00001001 00000001\n11001101 00100001\n11001101 00100000\n01010100\n01101000\n01101001\n01110011\n00100000\n01101001\n01110011\n00100000\n01000011\n00100100\n")),(0,a.kt)("p",null,"The equivalent hexadecimal representation is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"B409\nBA0901\nCD21\nCD20\n54\n68\n69\n73\n20\n69\n73\n20\n43\n24\n")),(0,a.kt)("p",null,"The first instruction moves the value 09 into register AH.  09 identifies the instruction that displays characters starting at the offset stored in register DX.  The second instruction moves the offset value 0109 into register DX.  The third instruction executes the instructions stored in register AH: displays the characters starting at offset 0109.  The fourth instruction stops execution.  The fifth through thirteenth lines hold the characters to be displayed.  The fourteenth line holds the terminator that identifies the end of the set of characters. "),(0,a.kt)("p",null,"The assembly language version of these instructions provides a more readable program.  Assembly language consists of symbols and values that are more readable than simple hexadecimal digits.  The assembly language version looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MOV AH,09\nMOV DX,0109\nINT 21\nINT 20\nDB 'T'\nDB 'h'\nDB 'i'\nDB 's'\nDB ' '\nDB 'i'\nDB 's'\nDB ' '\nDB 'C'\nDB '$'\n")),(0,a.kt)("p",null,"A Windows command line accepts assembly language instructions through the ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," input option on the ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," program.  Open a command prompt window and type the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"debug\n-a100\n1456:0100 MOV AH,09   ;move code for displaying text into register AH \n1456:0102 MOV DX,0109 ;move text address offset into register DX \n1456:0105 INT 21      ;call the interrupt stored in register AH\n1456:0107 INT 20      ;stop execution\n1456:0109 DB 'T'      ;text\n1456:010A DB 'h'      ;...\n1456:010B DB 'i'      ;to\n1456:010C DB 's'      ;...\n1456:010D DB ' '      ;be\n1456:010E DB 'i'      ;...\n1456:010F DB 's'      ;displayed\n1456:0110 DB ' '      ;...\n1456:0111 DB 'C'\n1456:0112 DB '$'      ;terminator character\n1456:0113\n-\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"a")," refers to the input option to the ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," program.  ",(0,a.kt)("inlineCode",{parentName:"p"},"100")," identifies the offset in memory where the instructions start."),(0,a.kt)("p",null,"The first entry on each line is the memory address in segment:offset form.  In ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," applications, the segments share the same address (",(0,a.kt)("inlineCode",{parentName:"p"},"0x14560"),").  The semi-colon refers to the end of a statement and the start of programmer comments."),(0,a.kt)("p",null,"To execute this program, we enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-g\nThis is C \nProgram terminated normally\n-\n")),(0,a.kt)("p",null,"To quit the debug program, we enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-q\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," program uses an operating system program called an ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"assembler"))," to convert our assembly language instructions into binary information as shown in the figure below:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/assembler.png",alt:null})),(0,a.kt)("p",null,"We call the binary result ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"machine language")),"."))}p.isMDXComponent=!0}}]);