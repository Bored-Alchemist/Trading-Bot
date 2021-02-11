The life cycle of any trading system is reduced to opening and closing positions. This is beyond any doubts. But when it comes to the algorithm realization, here there are as many opinions as programmers. Everyone will be able to solve the same problem in his own way, but with the same final result.

Over the years the of programming practice several approaches to constructing experts' logic and structure have been tried. At the moment it can be argued that established a clear pattern template that is used in all codes.
This approach is not 100% universal, but it may change your method of designing expert's logic. And the case is not what capabilities of working with orders you want to use the expert. The whole point - is the principle of creating a trading model.


1. Principles of Designing Trading Systems and Types of Event Sources
The basic approach to design of the algorithm, used by the majority, is to trace one position from its opening until closing. This is linear approach. And if you want to make changes to the code - it often leads to great complications, since a large number of conditions emerges and the code accumulates new branches of analysis.

The best solution to model a trading robot is "to serve conditions". And fundamental principle – to analyze not how this condition of expert and its positions and orders arose - but what we should do with them now. This basic principle is fundamentally changing the management of trade and simplifies the development of code.
Consider it in more detail.

1.1. The Principle of "Serving Conditions"
As already mentioned, the expert does not need to know how the current state has been achieved. It must know what to do with it now according to its environment (parameter values, stored orders properties etc.).
This principle is directly related to the fact that the expert exists from loop to loop (particularly - from the tick to tick), and it should not worry about what happened with orders at the previous tick. Therefore, you must use an event-driven approach of managing orders. I.e. on the current tick the expert saves its state, which is the starting point for decision about the next tick.

For example, you must remove all pending orders of expert and only then continue to analyze indicators and to place new orders. Most of the code examples that we have seen use the "while (true) {try to remove}" looping or slightly softer the "while (k < 1000) {try to remove; k++;}" looping. We will skip the variant, where one-time call of remove command without error analysis.

This method is linear, it it "hangs" the expert for indefinite amount of time.
Therefore, it will be more correct not to loop an expert, but to store the order to remove orders, so that at every new tick this order will be checked while attempting to delete pending order. In this case, an expert, while reading the state parameters, knows that in this moment it must delete orders. And it will attempt to remove them. If a trading error will occur, an expert will simply block further analysis and work before the next loop.

1.2. The Second Main Principle of Design - is the maximal possible abstraction from considered position direction (Buy/Sell), currency and chart. All expert functions should be implemented in such way, that direction or symbol are analyzed in rare cases when it really can not be avoided (for example, when you consider the favorable growth of price for the open position, although there are different options of avoiding specifics). Always try to avoid such "low level" design. This will reduce the code and the process of writing functions at least twice. And will make them "trade-independent. 
The implementation of this principle is to replace the explicit analysis of order types, symbol parameters and dependent calculated parameters with the macro-functions. Next article we cover this implementation in details.

1.3. Third principle – segmentation of algorithm into logical lexemes (independent modules)
In practice, we can say that the best approach is the separation of expert operations into individual functions. I think you will agree that it is difficult to write the whole algorithm of the expert writing in one function, and it complicates the subsequent analysis and editing. So we should not do it in MQL5, which now provides almost complete control over your environment.
Therefore, the logical lexemes (e.g. opening, trailing, closure of orders) should be implemented separately from each other with full analysis of environmental parameters and events. Through this approach, the expert becomes flexible in design. You can easily add new independent modules into it without touching existing ones, or disable existing modules without altering the main code.
