import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./TabStyle.css";
import AddPhones from "../add-phones/AddPhones";
import AddTablets from "../add-tablets/AddTablets";
import AddWatches from "../add-watches/AddWatches";
import AddLaptops from "../add-laptops/AddLaptops";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"} variant={"body2"}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  phones,
  setPhones,
  tablets,
  setTablets,
  watches,
  setWatches,
  laptops,
  setLaptops
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "Flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        marginTop: "25px",
      }}
    >
      <h1>categories</h1>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="PHONES" {...a11yProps(0)} />
          <Tab label="TABLETS" {...a11yProps(1)} />
          <Tab label="WATCHES" {...a11yProps(2)} />
          <Tab label="LAPTOPS" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AddPhones phones={phones} setPhones={setPhones} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddTablets tablets={tablets} setTablets={setTablets} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddWatches watches={watches} setWatches={setWatches} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AddLaptops laptops={laptops} setLaptops={setLaptops}/>
      </TabPanel>
    </Box>
  );
}
