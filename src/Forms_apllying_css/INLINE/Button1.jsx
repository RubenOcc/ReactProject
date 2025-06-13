    function Button_inline(){

        const styles = {
            backgroundColor: "hsl(55, 100%, 50%)",
            color: "black",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
        }

        return (<button style={styles}>CSS - INLINE</button>);
        // 3. THIRD WAY TO ADD STYLES - In Line
        // Good for small projects or components
    }

    export default Button_inline;