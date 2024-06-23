import { Box, Button, Card, Checkbox, Divider, FormControl, FormControlLabel, Grid, InputLabel, ListItemText, MenuItem, Radio, RadioGroup, Select, Stack, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useLocation } from 'react-router-dom';
import parse from "html-react-parser";

const steps = ['Plans', 'Details', 'Checkout', 'Done'];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const TestSeries = () => {

    const BASE_URL = "https://prodapi.classiolabs.com/";
    const Endpoints = 'https://classio.in-maa-1.linodeobjects.com/'
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const campaignId = queryParam.get("campaignId");
    const iframeId = queryParam.get("iframeId");
    const [selectCourse, setSelectCourse] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [course, setCourse] = useState([]);
    const [filterCourse, setFilterCourse] = useState([]);
    const [suggestedCourse, setSuggestedCourse] = useState([]);
    const [tagsList, setTagsList] = useState([]);
    const [courseContentList, setCourtseContentList] = useState([]);
    const [selectShedule, setSelectShedule] = useState('');
    const [schedule, setSchedule] = useState(null);
    const [planDetails, setPlanDetails] = useState({});
    const [newPrice, setNewPrice] = useState('');
    const [newDiscount, setNewDiscount] = useState('');
    const [selectedEntityId, setSelectedEntityId] = useState('');
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [title, setTitle] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [addSuggestCourse, setAddSuggestCourse] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [purchaseArray, setPurchaseArray] = useState([]);
    const [skipped, setSkipped] = useState(new Set());

    const [alltreeList, setAlltreeList] = useState([]);
    const [sheduleContentList, setSheduleContentList] = useState([]);
    const [activeBtn, setActiveBtn] = useState('both');
    const [selectSubjectWise, setSelectSubjectWise] = useState([]);
    const [subjectWiseListRender, setSubjectWiseListRender] = useState([]);
    const [plansList, setPlansList] = useState([]);

    useEffect(() => {
        getCourseList();
        getTagsList();
        // fetchDripContent();
    }, []);

    useEffect(() => {
        if (selectCourse) {
            const filterCourseTags = course.filter(item => {
                const tagslists = item.tags || [];
                if (tagslists.some(tag => tag.id === selectCourse?.setting?.checkoutTag)) {
                    return item
                }
            });

            setSuggestedCourse(filterCourseTags);
        }
    }, [selectCourse, course])

    useEffect(() => {
        if (selectedTag) {
            const filterCourseTags = course.filter(item => {
                const tagslists = item.tags || [];
                if (tagslists.some(tag => tag.id === selectedTag.id)) {
                    return item
                }
            });
            setSelectCourse(filterCourseTags[0])
            setFilterCourse(filterCourseTags);
            setSelectedIds([filterCourseTags[0]?.id])
            // setPurchaseArray([{
            //     purchaseType: "courseContent",
            //     entityId: Number(filterCourseTags[0]?.id),
            // }])
        }
    }, [selectedTag, course])


    useEffect(() => {
        if (courseContentList && courseContentList.length > 0) {
            const firstItem = courseContentList[0];
            setSchedule(firstItem);
            setSelectShedule(firstItem);
            getSheduleContentList(selectCourse?.id, firstItem.id);
        } else {
            setSchedule(null)
            setSelectShedule('')
        }
    }, [courseContentList])


    useEffect(() => {
        if (selectCourse?.id) {
            getCourseContentList(selectCourse?.id)
        }
    }, [selectCourse]);


    useEffect(() => {
        if (schedule?.id) {
            fetchDripContent();
        }
    }, [schedule])

    useEffect(() => {
        if (alltreeList?.length > 0) {
            setActiveBtn('both')
            getPlans('both');
        }
    }, [alltreeList])


    function getPlans(selectBtnType) {
        let plans = [];
        let subjectTempList = [];
        alltreeList.forEach((plan) => {
            if (selectBtnType === 'group1') {
                if (plan.children?.length > 0) {
                    plan.children.forEach((group) => {
                        if (group.title === 'Group 1') {
                            if (!checkPlansExists(plans, plan.title)) {
                                plans.push(plan);
                            }
                            if (group?.children?.length > 0) {
                                group.children.forEach((subject) => {
                                    if (!checkSubjectExists(subjectTempList, subject.title)) {
                                        subjectTempList.push(subject);
                                    }
                                })
                            }
                        }
                    })
                }
            }
            if (selectBtnType === 'group2') {
                if (plan.children?.length > 0) {
                    plan.children.forEach((group) => {
                        if (group.title === 'Group 2') {
                            if (!checkPlansExists(plans, plan.title)) {
                                plans.push(plan);
                            }
                            if (group?.children?.length > 0) {
                                group.children.forEach((subject) => {
                                    if (!checkSubjectExists(subjectTempList, subject.title)) {
                                        subjectTempList.push(subject);
                                    }
                                })
                            }
                        }
                    })
                }
            }
            if (selectBtnType === 'both') {
                if (plan.children?.length > 0) {
                    plan.children.forEach((group) => {
                        if (group.title === 'Group 2' || group.title === 'Group 1') {
                            if (!checkPlansExists(plans, plan.title)) {
                                plans.push(plan);
                            }
                            if (group?.children?.length > 0) {
                                group.children.forEach((subject) => {
                                    if (!checkSubjectExists(subjectTempList, subject.title)) {
                                        subjectTempList.push(subject);
                                    }
                                })
                            }
                        }
                    })
                }
            }
            if (selectSubjectWise.length > 0) {
                plans = filterPlansOnSelectedSubject(plans, selectSubjectWise);

            }
        })
        setSubjectWiseListRender(subjectTempList);
        setPlansList(plans);
    }


    function checkSubjectExists(subjectList, title) {

        let exists = false;
        subjectList.forEach((subject) => {
            if (subject.title === title) {
                exists = true;
            }
        })
        return exists;
    }
    function checkPlansExists(plansList, title) {

        let exists = false;
        plansList?.forEach((plan) => {
            if (plan.title === title) {
                exists = true;
            }
        })
        return exists;
    }

    function filterPlansOnSelectedSubject(plans, selectedSubjects) {
        let planList = [];
        plans?.forEach((plan) => {
            plan?.children?.forEach((group) => {
                group?.children?.forEach((subject) => {
                    selectedSubjects?.forEach((selectedSubject) => {
                        if (selectedSubject.title === subject.title && !checkPlansExists(planList, plan.title)) {
                            planList.push(plan);
                        }
                    })
                })
            })
        })
        return planList;
    }

    function filterSelectedSubjectListByGroup(group) {
        let selectedSubject = [];
        let entityIdArrays = []
        if (selectSubjectWise?.length > 0) {
            selectSubjectWise?.forEach((subject) => {
                if (group?.children?.length > 0) {
                    group?.children?.forEach((subjectGroup) => {
                        if (subject?.title === subjectGroup?.title) {
                            selectedSubject.push(subjectGroup);
                            // entityIdArrays.push({
                            //     purchaseType: "courseContent",
                            //     entityId: subjectGroup?.entityId
                            // })

                        }
                    })
                }

            })
        }
        return selectedSubject;
    }
    function filterSelectedSubjectListByPlan(plan) {
        let selectedSubject = [];
        if (selectSubjectWise?.length > 0) {
            selectSubjectWise?.forEach((subject) => {
                plan.children.forEach((group) => {
                    if (group?.children?.length > 0) {
                        group?.children?.forEach((subjectGroup) => {
                            if (subject?.title === subjectGroup?.title) {
                                selectedSubject.push(subjectGroup);
                            }
                        })
                    }
                })
            })
        }
        return selectedSubject;
    }

    function getPlanPrice(plan) {
        let price = 0;
        let discount = 0;
        let entityId = []
        if (activeBtn === 'both') {
            price = plan?.price;
            discount = plan?.discount;
            entityId.push({
                purchaseType: "courseContent",
                entityId: plan?.entityId
            })
            {
                let selectedSubject = filterSelectedSubjectListByPlan(plan);
                let subjectLength = 0;
                plan?.children.forEach((group) => {
                    subjectLength += group?.children?.length;
                })
                if (selectedSubject?.length > 0 && selectedSubject.length !== subjectLength) {
                    price = 0;
                    discount = 0;
                    entityId = [];
                    selectedSubject.forEach((selectedSubject) => {
                        price += selectedSubject?.price;
                        discount += selectedSubject?.discount;
                        entityId.push({
                            purchaseType: "courseContent",
                            entityId: selectedSubject?.entityId
                        })
                    })
                }
            }
        }
        else if (activeBtn === 'group1') {
            plan?.children.forEach((group) => {
                if (group?.title === 'Group 1') {
                    price = group?.price;
                    discount = group?.discount;
                    entityId.push({
                        purchaseType: "courseContent",
                        entityId: group?.entityId
                    })
                    let selectedSubject = filterSelectedSubjectListByGroup(group);
                    if (selectedSubject?.length > 0 && selectedSubject.length !== group.children.length) {
                        price = 0;
                        discount = 0;
                        entityId = [];
                        selectedSubject.forEach((selectedSubject) => {
                            price += selectedSubject?.price;
                            discount += selectedSubject?.discount;
                            entityId.push({
                                purchaseType: "courseContent",
                                entityId: selectedSubject?.entityId
                            })
                        })
                    }
                }
            })
        }

        else if (activeBtn === 'group2') {
            plan?.children.forEach((group) => {
                if (group?.title === 'Group 2') {
                    price = group?.price;
                    discount = group?.discount;
                    entityId.push({
                        purchaseType: "courseContent",
                        entityId: group?.entityId
                    })
                    let selectedSubject = filterSelectedSubjectListByGroup(group);
                    if (selectedSubject?.length > 0 && selectedSubject.length !== group.children.length) {
                        price = 0;
                        discount = 0;
                        entityId = [];
                        selectedSubject.forEach((selectedSubject) => {
                            price += selectedSubject?.price;
                            discount += selectedSubject?.discount;
                            entityId.push({
                                purchaseType: "courseContent",
                                entityId: selectedSubject?.entityId
                            })
                        })
                    }
                }
            })
        }
        return { "price": price, "discount": discount, "entityId": entityId };

    }


    const getTagsList = async () => {
        try {
            let requestOptions = {
                // headers: { "X-Auth": token },
                withCredentials: false,
            };
            const response = await axios.get(BASE_URL + "admin/course/fetch-tags-public/49", requestOptions);
            if (response?.data?.errorCode === 0) {
                setTagsList(response?.data?.tags)
                setSelectedTag(response?.data?.tags[1])
            };

        } catch (error) {
            console.log(error);
        }
    };

    const getCourseList = async () => {
        try {
            let requestOptions = {
                // headers: { "X-Auth": token },
                withCredentials: false,
            };
            const response = await axios.get(BASE_URL + "admin/course/fetch-public/49", requestOptions);
            if (response?.data?.errorCode === 0) {
                setCourse(response?.data?.courses);
                // setSelectCourse(response?.data?.courses[0])
            };
            // console.log('response', response);
        } catch (error) {
            console.log(error);
        }
    };



    const fetchDripContent = async () => {
        try {
            let requestOptions = {
                // headers: { "X-Auth": token },
                withCredentials: false,
            };
            const response = await axios.get(BASE_URL + `/admin/content/fetch-drip-content/${schedule?.id}`, requestOptions);

            if (response?.data?.errorCode === 0) {
                setAlltreeList(response?.data?.content)
            };
        } catch (error) {
            console.log(error);
        }
    }

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep = isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const handleEnrollNow = (item) => {
        // let entityIdArray = []
        // const entityObj ={
        //     purchaseType: "courseContent",
        //     entityId: entityId,
        // }
        // entityIdArray.push(entityObj)
        let object = getPlanPrice(item);
        setPurchaseArray(object.entityId)
        setPlanDetails(item);
        setNewPrice(object.price);
        setNewDiscount(object.discount);
        const newActiveStep = isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
        setActiveStep(newActiveStep);
    }

    const handleAddToCard = () => {
        const newActiveStep = isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
        setActiveStep(newActiveStep);
    }

    const handleAddCourse = (item) => {
        const coursePrice = Number(item?.price) - Number(item?.price) * (Number(item.discount) / 100);
        const id = item.id;
        const purchaseObject = {
            purchaseType: "course",
            entityId: id,
        };
        const updatedPurchaseObjects = [...purchaseArray];
        const isSelected = selectedIds.includes(id);

        if (isSelected) {
            setTotalPrice((prevTotalPrice) => prevTotalPrice - coursePrice);
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
            const indexToRemove = updatedPurchaseObjects.findIndex((obj) => obj.entityId === id);
            updatedPurchaseObjects.splice(indexToRemove, 1);
        } else {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + coursePrice);
            setSelectedIds([...selectedIds, id]);
            updatedPurchaseObjects.push(purchaseObject);
        }
        setPurchaseArray(updatedPurchaseObjects);
        setAddSuggestCourse(!addSuggestCourse)
    }

    const getCourseContentList = async (courseId) => {
        try {
            let requestOptions = {
                // headers: { "X-Auth": token },
                withCredentials: false,
            };
            const response = await axios.get(BASE_URL + `admin/course/fetchContent-public/${courseId}/0`, requestOptions);
            if (response?.data?.errorCode === 0) {
                let filterCourseContent = response?.data?.contentList;
                let filterDripCourse = filterCourseContent.filter((data) => data?.drip === true);

                setCourtseContentList(filterDripCourse);
            };
        } catch (error) {
            console.log(error);
        }
    }

    const getSheduleContentList = async (courseId, contentId) => {
        try {
            let requestOptions = {
                // headers: { "X-Auth": token },
                withCredentials: false,
            };
            const response = await axios.get(BASE_URL + `admin/course/fetchContent-public/${courseId}/${contentId}`, requestOptions);
            if (response?.data?.errorCode === 0) {
                let filterCourseContent = response?.data?.contentList;
                // let filterDripCourse = filterCourseContent.filter((data) => data?.drip === true);
                // console.log('filterCourseContent', filterCourseContent);
                setSheduleContentList(filterCourseContent);
            };
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeCours = (event) => {
        setPlansList([])
        setActiveStep(0)
        let courseId = event?.target?.value?.id
        setSelectCourse(event.target.value);
        getCourseContentList(courseId)
    };

    const handleTags = (event) => {
        setActiveStep(0)
        let courseId = event?.target?.value?.id
        setSelectedTag(event.target.value);
        getCourseList()
    };

    const handleChange = (event) => {
        setActiveStep(0)
        const selectedValue = event.target.value;
        setSchedule(selectedValue)
        const selectedObject = courseContentList.find(item => item.title === selectedValue?.title);
        setSelectShedule(selectedObject);
        getSheduleContentList(selectCourse?.id, selectedObject?.id);
        setPlansList([])
        // setSelectedObject(selectedObject);
    };

    const handleButtonClick = (value) => {
        setSelectSubjectWise([])
        setActiveStep(0)
        setActiveBtn(value)
        getPlans(value);
    }

    // const handleSubjectWise = (event) => {
    //     // setActiveStep(0)
    //     setActiveBtn("")
    //     setSelectSubjectWise(event.target.value)
    // }

    const handleSubjectWise = (event) => {
        // setActiveBtn("subjectwise")
        const {
            target: { value },
        } = event;
        setSelectSubjectWise(typeof value === 'string' ? value.split(',') : value);

    };

    useEffect(() => {
        getPlans(activeBtn);
    }, [selectSubjectWise])

    const handleSubmit = async () => {
        const body = {
            "firstName": title,
            "lastName": title,
            "contact": number,
            "email": email,
            "campaignId": campaignId,
            "instId": 49,
            "entityModals": purchaseArray
        }
        try {
            const response = await axios.post(BASE_URL + `/admin/payment/fetch-public-checkout-url`, body);

            if (response?.data?.status === true) {
                window.open(response?.data?.url, '_blank', "noreferrer");
                setTitle('');
                setNumber('');
                setEmail('')
                // handleDrawerClose()
            }
            const newActiveStep = isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
            setActiveStep(newActiveStep);
        } catch (err) {
            console.log(err);
        };
    };


    return (
        <div id="testseries" className="" style={{ margin: "40px", textAlign: 'left' }}>
            <div className="row" style={{ marginLeft: "4%", marginRight: "2%" }}>
                <div className="col-xs-12 col-md-12 col-lg-12">
                    <div>
                        <Typography variant='h3' sx={{
                            display: "flex", alignItems: "center", justifyContent: "left", textAlign: "left", fontWeight: "bold", marginTop: "24px", marginBottom: "15px"
                        }} className='mobile-text-high'>Highly Rated <img src="img/channels4_profile (1) 1.png" className="img-responsive logo-image mobile-high-rated" alt="" /> Test Series Program</Typography>
                        <p sx={{ mb: 3 }}>Crack CA-CS with Our Trusted and Most Loved Test Series.</p>
                    </div>
                    <Grid container sx={{ pt: 2, pb: 5 }}>
                        <Grid item xs={12} sm={8} md={8} lg={8}>
                            <Stack direction={"row"} spacing={3} className='stack-mobile'>
                                <FormControl className='mobile-select-button'>
                                    <InputLabel id="demo-simple-select-label">Select Exam</InputLabel>
                                    <Select
                                        className='select-option'
                                        sx={{ mb: 2, width: 250, fontSize: "15px" }}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={selectedTag}
                                        label="Select Exam"
                                        onChange={handleTags}
                                    >
                                        {
                                            tagsList && tagsList.map((data, index) => {
                                                return (
                                                    <MenuItem key={index} value={data}>{data?.tag}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl className='mobile-select-button'>
                                    <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
                                    <Select
                                        className='select-option'
                                        sx={{ mb: 2, width: 250, fontSize: "15px" }}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={selectCourse}
                                        label="Select Course"
                                        onChange={handleChangeCours}
                                    >
                                        {
                                            filterCourse && filterCourse.map((data, index) => {
                                                return (
                                                    <MenuItem key={index} value={data}>{data?.title}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box className="mobile-plan-des" sx={{
                        display: "flex", alignItems: "center", justifyContent: "center", textAlign:
                            'center'
                    }}>
                        <Typography sx={{ width: "50%", textAlign: "center", color: "black", fontSize: "10px" }} variant='p'>{parse(selectCourse?.description ? selectCourse?.description : "")}</Typography>
                    </Box>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pb: 2, pt: 1 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1, fontWeight: "bold" }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                            </Box>
                            <Box sx={{ pr: 3 }}>
                                <Grid item xs={12} sm={8} md={8} lg={8}>
                                    <Stepper activeStep={activeStep}>
                                        {steps.map((label, index) => {
                                            const stepProps = {};
                                            const labelProps = {};

                                            if (isStepSkipped(index)) {
                                                stepProps.completed = false;
                                            }
                                            return (
                                                <Step key={label} {...stepProps}>
                                                    <StepLabel {...labelProps}>
                                                        <Typography variant='h6' fontWeight={'bold'}>{label}</Typography>
                                                    </StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>
                                </Grid>
                                {
                                    activeStep === 0 && (
                                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                            <Box sx={{ mt: 5, ml: 1 }}>
                                                {
                                                    selectCourse?.id && (
                                                        <FormControl className='mobile-select-button'>
                                                            <InputLabel id="demo-simple-select-label">Schedule</InputLabel>
                                                            <Select
                                                                className='select-option'
                                                                sx={{ mb: 2, mr: 2, fontSize: "15px" }}
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                label='Schedule'
                                                                value={schedule}
                                                                onChange={handleChange}
                                                            >
                                                                {
                                                                    courseContentList && courseContentList.map((data, index) => {
                                                                        return (
                                                                            <MenuItem key={index} value={data}>{data?.title}</MenuItem>
                                                                        )
                                                                    })
                                                                }
                                                            </Select>
                                                        </FormControl>

                                                    )
                                                }
                                                <Button onClick={() => handleButtonClick('both')} sx={{ background: activeBtn === "both" ? "black" : "", color: activeBtn === "both" ? "#fff" : "", fontWeight: "bold", width: "fit-content", marginRight: '16px', padding: "18px 11px !important", border: "1px solid #c1c1c196" }}>Both Group</Button>
                                                <Button onClick={() => handleButtonClick('group1')} sx={{ background: activeBtn === "group1" ? "black" : "", color: activeBtn === "group1" ? "#fff" : "", fontWeight: "bold", width: "fit-content", marginRight: '16px', padding: "18px 11px !important", border: "1px solid #c1c1c196" }}>Group 1</Button>
                                                <Button onClick={() => handleButtonClick('group2')} sx={{ background: activeBtn === "group2" ? "black" : "", color: activeBtn === "group2" ? "#fff" : "", fontWeight: "bold", width: "fit-content", marginRight: '16px', padding: "18px 11px !important", border: "1px solid #c1c1c196" }}>Group 2</Button>
                                                <FormControl className='mobile-select-button'>
                                                    <InputLabel id="demo-simple-select-label">Subject Wise</InputLabel>
                                                    <Select
                                                        sx={{ mb: 2, minWidth: "100px", maxWidth: "300px", fontSize: "15px" }}
                                                        labelId='channel-lable'
                                                        fullWidth
                                                        multiple
                                                        value={selectSubjectWise}
                                                        onChange={handleSubjectWise}
                                                        renderValue={(selected) => selected?.map((x) => x.title).join(', ')}
                                                        // renderValue={(selected) => (selected.title).join(', ')}
                                                        MenuProps={MenuProps}
                                                        label="Subject Wise"
                                                    >
                                                        {
                                                            subjectWiseListRender && subjectWiseListRender
                                                                .filter(item => item.title === item.title)
                                                                .map((item, index) => {
                                                                    return (
                                                                        <MenuItem key={index} value={item}>
                                                                            <Checkbox checked={selectSubjectWise.indexOf(item) > -1} />
                                                                            <ListItemText primary={item?.title} />
                                                                        </MenuItem>
                                                                    );
                                                                })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                    )
                                }

                                <div>
                                    {allStepsCompleted() ? (
                                        <React.Fragment>
                                            <Typography sx={{ mt: 2, mb: 1 }}>
                                                All steps completed - you&apos;re finished
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                <Box sx={{ flex: '1 1 auto' }} />
                                                <Button onClick={handleReset}>Reset</Button>
                                            </Box>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            {
                                                activeStep === 0 && (
                                                    <Typography sx={{ mt: 2, mb: 1, py: 1 }} className={plansList?.length > 0 ? 'mobile-boxes' : ""}>
                                                        {
                                                            selectCourse?.id && selectShedule?.id && (
                                                                <Grid container sx={{ padding: 1 }}>
                                                                    {
                                                                        plansList && plansList.map((item, id) => {
                                                                            let logo = item?.description;
                                                                            let object = getPlanPrice(item);
                                                                            let price = object?.price;
                                                                            let discount = object?.discount;
                                                                            let entityId = object?.entityId;

                                                                            return <Grid item xs={12} sm={2.4} md={2.4} lg={2.4} sx={{ padding: "10px", textAlign: "center", }}>
                                                                                <Box sx={{ borderRadius: "10px", position: "relative", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                                                                    <img src={logo?.thumb ? Endpoints + logo?.thumb : "img/folder-2.png"} style={{ width: "100%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px" }} />
                                                                                    <Box sx={{ pb: 4 }}>
                                                                                        <Typography variant='h5' fontWeight={"bold"} sx={{ mt: 2, color: "black" }}>
                                                                                            {item?.title}

                                                                                        </Typography>
                                                                                        {
                                                                                            item.paid ?
                                                                                                <p>
                                                                                                    {
                                                                                                        discount > 0 ? <p style={{ fontWeight: "bold", color: "#00BC78", display: "flex", textAlign: 'center', alignItems: "center", justifyContent: 'center', marginTop: "20px" }}>
                                                                                                            <p style={{ fontSize: "12px" }}>
                                                                                                                ₹ {Number(price) - (Number(price) * (Number(discount) / 100))}
                                                                                                            </p>
                                                                                                            <p style={{ color: "black", fontSize: "12px" }}> &nbsp; <s>{price}</s> &nbsp;{discount}% off</p>
                                                                                                        </p>
                                                                                                            : <p style={{ fontWeight: "bold", color: "#00BC78", display: "flex", textAlign: 'center', alignItems: "center", justifyContent: 'center', marginTop: "20px" }}><p style={{ fontSize: "12px" }}> ₹ {price}</p></p>
                                                                                                    }
                                                                                                </p>
                                                                                                :
                                                                                                <p>
                                                                                                    Free
                                                                                                    {/* {getPlanPrice(item)} */}
                                                                                                </p>
                                                                                        }
                                                                                    </Box>
                                                                                    <Box sx={{ position: "absolute", bottom: "0", left: 0, right: 0, padding: "0px 10px 0 10px" }}>
                                                                                        <Button sx={{ background: "red", color: "#fff", margin: "10px 0px 10px 0px", width: "100%" }} onClick={() => handleEnrollNow(item)} 
className='button-hover'>Get Started</Button>
                                                                                    </Box>
                                                                                </Box>
                                                                            </Grid>
                                                                        })
                                                                    }
                                                                </Grid>
                                                            )
                                                        }
                                                    </Typography>
                                                )
                                            }
                                            {
                                                activeStep === 1 && (
                                                    <Typography sx={{ mt: 3, mb: 1, py: 1 }}>
                                                        <Grid container sx={{ padding: 1 }}>
                                                            <Grid item xs={12} sm={12} md={12} lg={4} sx={{ padding: "10px" }}>
                                                                <Box sx={{ background: "rgb(123 127 129 / 7%)", margin: "15px", borderRadius: "8px" }}>
                                                                    <img src={planDetails?.description?.thumb ? Endpoints + planDetails?.description?.thumb : 'img/folder-2.png'} style={{ height: "180px", width: "280px", padding: "30px" }} />
                                                                </Box>
                                                                <Grid container sx={{ padding: 1, textAlign: "center" }}>
                                                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                                                        <img ssrc="img/folder-2.png" style={{ width: "100px" }} />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                                                        <img ssrc="img/folder-2.png" style={{ width: "100px" }} />
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item xs={12} sm={7} md={7} lg={7} sx={{ padding: "10px" }}>
                                                                <Typography variant='h4' fontWeight={"bold"} sx={{ marginBottom: "20px" }}>
                                                                    {planDetails?.title}
                                                                </Typography>
                                                                {
                                                                    planDetails ?
                                                                        <p>
                                                                            {
                                                                                newDiscount > 0 ? <p style={{ fontWeight: "bold" }}>
                                                                                    <p style={{ marginBottom: 0 }}>
                                                                                        Price Rs. {(Number(newPrice) - (Number(newPrice) * (Number(newDiscount) / 100)) + totalPrice)}
                                                                                    </p>
                                                                                </p>
                                                                                    : <p style={{ fontWeight: "bold" }}>Price Rs. {newPrice + totalPrice}</p>
                                                                            }
                                                                        </p>
                                                                        :
                                                                        <p>
                                                                            Free
                                                                        </p>
                                                                }
                                                                <Typography variant='p' sx={{ marginBottom: "50px" }}>
                                                                    {planDetails?.description?.description ? parse(planDetails?.description?.description) : ""}
                                                                </Typography>
                                                                <Box>
                                                                    <Button sx={{ color: "black", fontWeight: "bold", background: "#ffc966", mt: 3 }} onClick={handleAddToCard}>Buy Now</Button>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                        {
                                                            suggestedCourse?.length > 0 && (
                                                                <Grid container sx={{ padding: 1 }}>
                                                                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ padding: "10px" }}>
                                                                        <Typography variant='h6' fontWeight={'bold'} ml={3} mb={1} className='mobile-suggested'>Suggested Course</Typography>
                                                                        <Box sx={{ display: "flex", ml: 3 }} className='mobile-suggested'>
                                                                            {
                                                                                suggestedCourse?.length > 0 && suggestedCourse.map((course, i) => {
                                                                                    return <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "10px" }} >
                                                                                        <img src={"https://classio.in-maa-1.linodeobjects.com/" + course.logo} alt="cardthumbimage" style={{ height: "120px", width: "100%" }} />
                                                                                        <Stack gap={'0.5rem'} pl={'1rem'} pr={'1rem'}>
                                                                                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} textAlign={"left"}>
                                                                                                <p style={{ width: "100%", fontWeight: "bold", margin: 0 }}>
                                                                                                    {course.title}
                                                                                                </p>
                                                                                            </Stack>
                                                                                            {
                                                                                                course.paid ?
                                                                                                    <>
                                                                                                        {
                                                                                                            course.discount > 0 ? <p style={{ fontWeight: "bold", color: "#f59f00", display: "flex", fontSize: "11px", margin: 0 }}>
                                                                                                                <p>
                                                                                                                    {Number(course.price) - (Number(course.price) * (Number(course.discount) / 100))}/-
                                                                                                                </p>

                                                                                                                <p style={{ color: "#e5dfdf" }}> &nbsp; <s>{course.price}/-</s> &nbsp;{course.discount}%</p>
                                                                                                            </p>
                                                                                                                : <p style={{ fontWeight: "bold", color: "#f59f00" }}>{course.price}/-</p>
                                                                                                        }
                                                                                                    </>
                                                                                                    :
                                                                                                    <p style={{ fontWeight: "bold", fontSize: "11px" }}>
                                                                                                        Free
                                                                                                    </p>
                                                                                            }
                                                                                            {/* <div>
                                                                                            <div className={course.active ? " bg-green-500 h-3 w-3 rounded-full" : " bg-red-500 w-3 h-3 rounded-full"}></div>
                                                                                        </div> */}

                                                                                        </Stack>
                                                                                        <Button startIcon={selectedIds.includes(course?.id) ?
                                                                                            <CheckCircleRoundedIcon /> :
                                                                                            <AddCircleIcon fontSize="40px" />
                                                                                        } onClick={() => handleAddCourse(course)}>{selectedIds.includes(course?.id) ? "Added" : "Add"}</Button>
                                                                                    </Box>
                                                                                })
                                                                            }
                                                                        </Box>
                                                                    </Grid>
                                                                </Grid>
                                                            )
                                                        }

                                                    </Typography>
                                                )
                                            }
                                            {
                                                activeStep === 2 && (
                                                    <Typography sx={{ mt: 3, mb: 1, py: 1 }}>
                                                        <Card sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", textAlign: "center" }}>
                                                            <Typography padding={1} mt={3} fontWeight={'bold'}>
                                                                Please fill this details
                                                            </Typography>
                                                            <Grid container sx={{ margin: "20px 0", justifyContent: "center" }}>
                                                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                                                    <TextField
                                                                        className='mobile-fill-textfield'
                                                                        fullWidth
                                                                        variant="outlined"
                                                                        type="text"
                                                                        label="Name"
                                                                        name="name"
                                                                        value={title}
                                                                        onChange={(e) => setTitle(e.target.value)}
                                                                        InputProps={{
                                                                            style: {
                                                                                borderRadius: "10px",
                                                                            }
                                                                        }}
                                                                        sx={{ gridColumn: "span 12", m: 2 }}
                                                                    />
                                                                    <TextField
                                                                        className='mobile-fill-textfield'
                                                                        fullWidth
                                                                        variant="outlined"
                                                                        type="number"
                                                                        label="Number"
                                                                        name="number"
                                                                        value={number}
                                                                        onChange={(e) => setNumber(e.target.value)}
                                                                        InputProps={{
                                                                            style: {
                                                                                borderRadius: "10px",
                                                                            }
                                                                        }}
                                                                        sx={{ gridColumn: "span 12", m: 2 }}
                                                                    />
                                                                    <TextField
                                                                        className='mobile-fill-textfield'
                                                                        fullWidth
                                                                        variant="outlined"
                                                                        type="email"
                                                                        label="Email"
                                                                        name="email"
                                                                        value={email}
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                        InputProps={{
                                                                            style: {
                                                                                borderRadius: "10px",
                                                                            }
                                                                        }}
                                                                        sx={{ gridColumn: "span 12", m: 2 }}
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                sx={{ width: "200px", padding: "10px", margin: "15px" }}
                                                                onClick={handleSubmit}
                                                                disabled={title === '' || number === '' || email === ''}
                                                            >
                                                                Pay
                                                            </Button>
                                                        </Card>
                                                    </Typography>
                                                )
                                            }
                                            {
                                                activeStep === 3 && (
                                                    <Typography sx={{ mt: 3, mb: 1, py: 1 }}>
                                                        <Card sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", textAlign: "center" }}>

                                                            <Grid container sx={{ margin: "20px 0", justifyContent: "center" }}>
                                                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                                                    <Typography variant='h3'>
                                                                        Thank you for submitting
                                                                    </Typography>
                                                                    <Button
                                                                        variant="contained"
                                                                        color="primary"
                                                                        sx={{ width: "200px", padding: "10px", margin: "15px" }}
                                                                        onClick={() => setActiveStep(0)}
                                                                    >
                                                                        Go to back
                                                                    </Button>
                                                                </Grid>

                                                            </Grid>
                                                        </Card>
                                                    </Typography>
                                                )
                                            }
                                        </React.Fragment>
                                    )}
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};
