import styles from './Button.module.css';

    function Button_module(){
        return (<button className={styles.button}>CSS - MODULE, created with hash</button>);
        // 2. SECOND WAY TO ADD STYLES - MODULE - GO TO Button.module.css
        // Creates a unique class name for the button
        // Good styles for each module but not for global styles
        // Because it requires additional configuration
    }

    export default Button_module;