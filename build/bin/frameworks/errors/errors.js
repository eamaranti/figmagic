"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorGetTokenMatchNoRemSize = exports.ErrorGetSvgFileData = exports.ErrorGetTokenMatch = exports.ErrorGetPaddingY = exports.ErrorGetPaddingX = exports.ErrorGetIntersectingValues = exports.ErrorGetIdstring = exports.ErrorGetIds = exports.ErrorGetFromApi = exports.ErrorGetFontColor = exports.ErrorGetFiles = exports.ErrorGetFileList = exports.ErrorGetFileContents = exports.ErrorGetFileContentAndPathNoReturn = exports.ErrorGetFileContentAndPathMissingFields = exports.ErrorGetFileContentAndPath = exports.ErrorGetFigmaDocumentId = exports.ErrorGetDescription = exports.ErrorGetDataNoTokenOrUrl = exports.ErrorGetDataNoData = exports.ErrorGetDataLocal = exports.ErrorGetDataFailedLocalAndRemote = exports.ErrorGetData = exports.ErrorGetAlphaInPercent = exports.ErrorFindShortenedNameMatchWrongType = exports.ErrorFigmagicController = exports.ErrorExtractTokensNoConfig = exports.ErrorExtractTokens = exports.ErrorExtractDescription = exports.ErrorDownloadFile = exports.ErrorCreateTokens = exports.ErrorCreateSolidColorString = exports.ErrorCreatePage = exports.ErrorCreateLinearGradientString = exports.ErrorCreateImportStringFromListZeroLength = exports.ErrorCreateImportStringFromList = exports.ErrorCreateGraphics = exports.ErrorCreateFolder = exports.ErrorCreateEnumStringOutOfObject = exports.ErrorCreateElements = exports.ErrorCreateCssString = exports.ErrorCreateConfigurationNoDefault = exports.ErrorConvertRgbaToHex = exports.ErrorConvertHexToRgba = exports.ErrorCleanSvgData = exports.ErrorCleanArrays = exports.ErrorCheckIfStringOnlyContainsReturnsOrSpaces = exports.ErrorCamelize = exports.ErrorCalculateDegree2Point = exports.ErrorAddDescriptionToElements = void 0;
exports.ErrorMakeSpacingTokensNoFrame = exports.ErrorMakeSpacingTokensNoChildren = exports.ErrorMakeSpacingTokensMissingProps = exports.ErrorMakeShadowTokensNoFrame = exports.ErrorMakeShadowTokensNoChildren = exports.ErrorMakeShadowTokensMissingProps = exports.ErrorMakeRadiusTokensNoFrame = exports.ErrorMakeRadiusTokensNoChildren = exports.ErrorMakeRadiusTokensMissingProps = exports.ErrorMakeOpacityTokensNoFrame = exports.ErrorMakeOpacityTokensNoChildren = exports.ErrorMakeOpacityTokensMissingProps = exports.ErrorMakeLineHeightTokensNoFrame = exports.ErrorMakeLineHeightTokensNoChildren = exports.ErrorMakeLetterSpacingTokensNoFrame = exports.ErrorMakeLetterSpacingTokensNoChildren = exports.ErrorMakeLetterSpacingTokensMissingProps = exports.ErrorMakeFontWeightTokensNoFrame = exports.ErrorMakeFontWeightTokensNoChildren = exports.ErrorMakeFontWeightTokensMissingWeight = exports.ErrorMakeFontWeightTokensMissingProps = exports.ErrorMakeFontTokensNoFrame = exports.ErrorMakeFontTokensNoChildren = exports.ErrorMakeFontTokensMissingProps = exports.ErrorMakeFontSizeTokensNoSizing = exports.ErrorMakeFontSizeTokensNoFrame = exports.ErrorMakeFontSizeTokensNoChildren = exports.ErrorMakeFontSizeTokensMissingSize = exports.ErrorMakeFontSizeTokensMissingProps = exports.ErrorMakeEasingTokensNoFrame = exports.ErrorMakeEasingTokensNoChildren = exports.ErrorMakeEasingTokensMissingProps = exports.ErrorMakeDurationTokensNoFrame = exports.ErrorMakeDurationTokensNoChildren = exports.ErrorMakeDurationTokensMissingProps = exports.ErrorMakeDelayTokensNoFrame = exports.ErrorMakeDelayTokensNoChildren = exports.ErrorMakeDelayTokensMissingProps = exports.ErrorMakeColorTokensNoFrame = exports.ErrorMakeColorTokensNoFills = exports.ErrorMakeColorTokensNoChildren = exports.ErrorMakeBorderWidthTokensNoFrame = exports.ErrorMakeBorderWidthTokensNoChildren = exports.ErrorMakeBorderWidthTokensMissingProps = exports.ErrorGetShadow = exports.ErrorGetBorderColor = exports.ErrorGetBackgroundColor = exports.ErrorLoadFile = exports.ErrorHandleNestedElements = exports.ErrorGetUniqueValues = void 0;
exports.ErrorValidateConfigOutputFormatCss = exports.ErrorValidateConfigOutputDataTypeToken = exports.ErrorValidateConfigOpacitiesUnit = exports.ErrorValidateConfigLetterSpacingUnit = exports.ErrorValidateConfigFontUnit = exports.ErrorValidateConfigFolderName = exports.ErrorValidateConfigFileName = exports.ErrorValidateConfig = exports.ErrorUpdateParsing = exports.ErrorToPascalCase = exports.ErrorSliceOutObjectFromFile = exports.ErrorSetupMediaQueryTokensNoFrame = exports.ErrorSetupMediaQueryTokensNoChildren = exports.ErrorSetupMediaQueryTokensMissingProps = exports.ErrorRoundColorValue = exports.ErrorRoundColor = exports.ErrorReplaceMediaQuery = exports.ErrorRefresh = exports.ErrorProcessNestedCss = exports.ErrorProcessGraphicsNoImages = exports.ErrorProcessGraphicElementsMap = exports.ErrorProcessGraphicsImageError = exports.ErrorProcessGraphics = exports.ErrorProcessElementsNoMainElement = exports.ErrorProcessElements = exports.ErrorPrepareWrite = exports.ErrorPrepFileGraphicComponent = exports.ErrorPrepFileStyledComponents = exports.ErrorPrepFileStorybook = exports.ErrorPrepFileDescription = exports.ErrorPrepFileCss = exports.ErrorPrepFileComponent = exports.ErrorParseTypographyStylingFromElement = exports.ErrorParseShadow = exports.ErrorParsePadding = exports.ErrorParseHeight = exports.ErrorParseElement = exports.ErrorParseCssFromElement = exports.ErrorParseCliArgs = exports.ErrorParseBorderWidth = exports.ErrorParseBorderRadius = exports.ErrorParseBorderColor = exports.ErrorParseBackgroundColor = exports.ErrorNormalizeUnitsUndefined = exports.ErrorNormalizeUnitsNoRemSize = exports.ErrorNormalizeUnits = exports.ErrorMakeZindexTokensNoFrame = exports.ErrorMakeZindexTokensNoChildren = exports.ErrorMakeZindexTokensMissingProps = exports.ErrorMakeSpacingTokensNoUnits = void 0;
exports.ErrorWriteTokensNoSettings = exports.ErrorWriteTokens = exports.ErrorWriteGraphicElementsMap = exports.ErrorWriteGraphics = exports.ErrorWriteFileWrongType = exports.ErrorWriteFile = exports.ErrorWriteElements = exports.ErrorWriteBaseJson = exports.ErrorWrite = exports.ErrorValidateConfigTemplatePathGraphic = exports.ErrorValidateConfigTemplatePathStyled = exports.ErrorValidateConfigTemplatePathStorybook = exports.ErrorValidateConfigTemplatePathReact = exports.ErrorValidateConfigSpacingUnit = exports.ErrorValidateConfigOutputScaleGraphics = exports.ErrorValidateConfigOutputFormatTokens = exports.ErrorValidateConfigOutputFormatStorybook = exports.ErrorValidateConfigOutputFormatGraphics = exports.ErrorValidateConfigOutputFormatElements = exports.ErrorValidateConfigOutputFormatDesc = void 0;
const colors_1 = require("../system/colors");
function ErrorMessage(str) {
    return `${colors_1.colors.FgRed}${str}${colors_1.colors.Reset}`;
}
exports.ErrorAddDescriptionToElements = ErrorMessage('Missing elements and/or components in addDescriptionToElements()!');
exports.ErrorCalculateDegree2Point = ErrorMessage('Missing point1 and/or point2 in calculateDegree2Point!');
exports.ErrorCamelize = ErrorMessage('No string provided to camelize()!');
exports.ErrorCheckIfStringOnlyContainsReturnsOrSpaces = ErrorMessage('No string provided to checkIfStringOnlyContainsReturnsOrSpaces()!');
exports.ErrorCleanArrays = ErrorMessage('Missing one or more of "classNames" and/or "classContent" when calling cleanArrays()!');
exports.ErrorCleanSvgData = ErrorMessage('No data passed to cleanSvgData()!');
exports.ErrorConvertHexToRgba = ErrorMessage('Missing one or more of red, green, blue and alpha in convertHexToRgba()!');
exports.ErrorConvertRgbaToHex = ErrorMessage('Missing color value (as string, like "rgba(123,123,123,0.05) when calling convertRgbaToHex()!');
exports.ErrorCreateConfigurationNoDefault = ErrorMessage('No default configuration provided to createConfiguration()!');
exports.ErrorCreateCssString = ErrorMessage('Missing one or more of required arguments: "intersections", "uniqueValues"!');
exports.ErrorCreateElements = ErrorMessage('Missing arguments provided to createElements()!');
exports.ErrorCreateEnumStringOutOfObject = ErrorMessage('No object provided to createEnumStringOutOfObject()!');
exports.ErrorCreateFolder = ErrorMessage('No directory specified for createFolder()!');
exports.ErrorCreateGraphics = ErrorMessage('Missing arguments provided to createGraphics()!');
exports.ErrorCreateImportStringFromList = ErrorMessage('No "importArray" provided to createImportStringFromList()!');
exports.ErrorCreateImportStringFromListZeroLength = ErrorMessage('Provided "importArray" is zero-length when calling createImportStringFromList()!');
exports.ErrorCreateLinearGradientString = ErrorMessage('Missing fills and gradientHandlePositions in createLinearGradientString!');
exports.ErrorCreatePage = ErrorMessage('No pages provided to createPage()!');
exports.ErrorCreateSolidColorString = ErrorMessage('Missing fills in createSolidColorString!');
exports.ErrorCreateTokens = ErrorMessage('Missing required arguments when calling createTokens()!');
exports.ErrorDownloadFile = ErrorMessage('Missing one or more of "url", "folder", or "file" arguments in downloadFile()!');
exports.ErrorExtractDescription = ErrorMessage('Missing description in extractDescription()!');
exports.ErrorExtractTokens = ErrorMessage('No sheet or name for processTokens()!');
exports.ErrorExtractTokensNoConfig = ErrorMessage('No config provided to processTokens()!');
exports.ErrorFigmagicController = ErrorMessage('Error in FigmagicController()!');
exports.ErrorFindShortenedNameMatchWrongType = ErrorMessage('Arguments are not of string type!');
exports.ErrorGetAlphaInPercent = ErrorMessage('Missing RGB(A) color string when calling getAlphaInPercent()!');
exports.ErrorGetData = ErrorMessage('Could not retrieve any data. Are you missing a valid API key?');
exports.ErrorGetDataFailedLocalAndRemote = ErrorMessage('Failed to get local and/or remote data in getData()!');
exports.ErrorGetDataLocal = ErrorMessage('Missing arguments when calling getDataLocal()!');
exports.ErrorGetDataNoData = ErrorMessage('No data retrieved. Verify that your Figma document ID ("Figma URL") is correct.');
exports.ErrorGetDataNoTokenOrUrl = ErrorMessage('Missing token and/or URL when attempting to get remote data!');
exports.ErrorGetDescription = ErrorMessage('Missing element in getDescription()!');
exports.ErrorGetFigmaDocumentId = ErrorMessage('Missing URL when calling getFigmaDocumentId()!');
exports.ErrorGetFileContentAndPath = ErrorMessage('Missing argument in getFileContentAndPath()!');
exports.ErrorGetFileContentAndPathMissingFields = ErrorMessage('Missing fields in getFileContentAndPath()!');
exports.ErrorGetFileContentAndPathNoReturn = ErrorMessage('Missing return in getFileContentAndPath()!');
exports.ErrorGetFileContents = ErrorMessage('Missing path, name and/or format!');
exports.ErrorGetFileList = ErrorMessage('Missing one or more of required arguments: "imageResponse", "ids" and/or "outputFormatGraphics" when calling getFileList()!');
exports.ErrorGetFiles = ErrorMessage('Error in getFiles()!');
exports.ErrorGetFontColor = ErrorMessage('Error in getFontColor()!');
exports.ErrorGetFromApi = ErrorMessage('Missing one or more of required arguments: "figmaToken", "figmaUrl" when attempting to get data from Figma API!');
exports.ErrorGetIds = ErrorMessage('No (or zero-length) array passed to getIds()!');
exports.ErrorGetIdstring = ErrorMessage('Missing required argument "ids" when calling getIdString()!');
exports.ErrorGetIntersectingValues = ErrorMessage('Missing "arrays" argument when calling getIntersectingValues()!');
exports.ErrorGetPaddingX = ErrorMessage('Error when calling getPaddingX()!');
exports.ErrorGetPaddingY = ErrorMessage('Error when calling getPaddingY()!');
exports.ErrorGetTokenMatch = ErrorMessage('Missing one or more of required arguments: "tokenFileName", "property", and/or "expectedValue"!');
exports.ErrorGetSvgFileData = ErrorMessage('Missing string when calling getSvgFileData()!');
exports.ErrorGetTokenMatchNoRemSize = ErrorMessage('Missing required "remSize" argument for getTokenMatch() when converting to rem/em!');
exports.ErrorGetUniqueValues = ErrorMessage('Missing one or more of required arguments: "arrays", and/or "intersections" when calling getUniqueValues()!');
exports.ErrorHandleNestedElements = ErrorMessage('Missing element in handleNestedElements()!');
const ErrorLoadFile = (path) => {
    if (!path)
        throw new Error('No string passed to ErrorLoadFile!');
    return ErrorMessage(`Could not find file: ${path}!`);
};
exports.ErrorLoadFile = ErrorLoadFile;
exports.ErrorGetBackgroundColor = ErrorMessage('Error in getBackgroundColor()!');
exports.ErrorGetBorderColor = ErrorMessage('Error in getBorderColor()!');
exports.ErrorGetShadow = ErrorMessage('Error in getShadow()!');
exports.ErrorMakeBorderWidthTokensMissingProps = ErrorMessage('Missing "name" or "strokeWeight" properties in border width frame!');
exports.ErrorMakeBorderWidthTokensNoChildren = ErrorMessage('Border Width has no children!');
exports.ErrorMakeBorderWidthTokensNoFrame = ErrorMessage('No frame for makeBorderWidthTokens()!');
exports.ErrorMakeColorTokensNoChildren = ErrorMessage('Color tokens frame has no children!');
exports.ErrorMakeColorTokensNoFills = ErrorMessage('Color has no "fills" property!');
exports.ErrorMakeColorTokensNoFrame = ErrorMessage('No frame for makeColorTokens()!');
exports.ErrorMakeDelayTokensMissingProps = ErrorMessage('Missing "name" or "characters" properties in Delay frame!');
exports.ErrorMakeDelayTokensNoChildren = ErrorMessage('Delay frame has no children!');
exports.ErrorMakeDelayTokensNoFrame = ErrorMessage('No frame for makeDelayTokens()!');
exports.ErrorMakeDurationTokensMissingProps = ErrorMessage('Missing "name" or "characters" properties in Duration frame!');
exports.ErrorMakeDurationTokensNoChildren = ErrorMessage('Duration frame has no children!');
exports.ErrorMakeDurationTokensNoFrame = ErrorMessage('No frame for makeDurationTokens()!');
exports.ErrorMakeEasingTokensMissingProps = ErrorMessage('Missing "name" or "characters" properties in Easing frame!');
exports.ErrorMakeEasingTokensNoChildren = ErrorMessage('Easing frame has no children!');
exports.ErrorMakeEasingTokensNoFrame = ErrorMessage('No frame for makeEasingTokens()!');
exports.ErrorMakeFontSizeTokensMissingProps = ErrorMessage('Missing "name" or "style" properties in font sizes frame!');
exports.ErrorMakeFontSizeTokensMissingSize = ErrorMessage('Missing required "style.fontSize" property!');
exports.ErrorMakeFontSizeTokensNoChildren = ErrorMessage('Font size frame is missing "children" array!');
exports.ErrorMakeFontSizeTokensNoFrame = ErrorMessage('No frame for makeFontSizeTokens()!');
exports.ErrorMakeFontSizeTokensNoSizing = ErrorMessage('Missing "fontUnit" or "remSize" properties when calling makeFontSizeTokens()!');
exports.ErrorMakeFontTokensMissingProps = ErrorMessage('Missing "name" or "style" properties in font tokens frame!');
exports.ErrorMakeFontTokensNoChildren = ErrorMessage('Font tokens frame is missing "children" array!');
exports.ErrorMakeFontTokensNoFrame = ErrorMessage('No frame for makeFontTokens()!');
exports.ErrorMakeFontWeightTokensMissingProps = ErrorMessage('Missing "name" or "style" properties in font weights frame!');
exports.ErrorMakeFontWeightTokensMissingWeight = ErrorMessage('Missing required "style.fontWeight" property!');
exports.ErrorMakeFontWeightTokensNoChildren = ErrorMessage('Font weights frame is missing "children" array!');
exports.ErrorMakeFontWeightTokensNoFrame = ErrorMessage('No frame for makeFontWeightTokens()!');
exports.ErrorMakeLetterSpacingTokensMissingProps = ErrorMessage('Missing "name" or "style" properties in letter spacing frame!');
exports.ErrorMakeLetterSpacingTokensNoChildren = ErrorMessage('Letter Spacing frame has no children!');
exports.ErrorMakeLetterSpacingTokensNoFrame = ErrorMessage('No frame for makeLetterSpacingTokens()!');
exports.ErrorMakeLineHeightTokensNoChildren = ErrorMessage('Line heights frame has no children!');
exports.ErrorMakeLineHeightTokensNoFrame = ErrorMessage('No frame for makeLineHeightTokens()!');
exports.ErrorMakeOpacityTokensMissingProps = ErrorMessage('Missing "name" or "characters" properties in opacities frame!');
exports.ErrorMakeOpacityTokensNoChildren = ErrorMessage('Opacities frame has no children!');
exports.ErrorMakeOpacityTokensNoFrame = ErrorMessage('No frame for makeOpacityTokens()!');
exports.ErrorMakeRadiusTokensMissingProps = ErrorMessage('Missing "name"  property in radius frame!');
exports.ErrorMakeRadiusTokensNoChildren = ErrorMessage('Radius frame has no children!');
exports.ErrorMakeRadiusTokensNoFrame = ErrorMessage('No frame for makeRadiusTokens()!');
exports.ErrorMakeShadowTokensMissingProps = ErrorMessage('Missing "effects" property in shadow frame!');
exports.ErrorMakeShadowTokensNoChildren = ErrorMessage('Shadow frame has no children!');
exports.ErrorMakeShadowTokensNoFrame = ErrorMessage('No frame for makeShadowTokens()!');
exports.ErrorMakeSpacingTokensMissingProps = ErrorMessage('Missing "name" or "absoluteBoundingBox" properties in spacing frame!');
exports.ErrorMakeSpacingTokensNoChildren = ErrorMessage('Spacing frame has no children!');
exports.ErrorMakeSpacingTokensNoFrame = ErrorMessage('No frame for makeSpacingTokens()!');
exports.ErrorMakeSpacingTokensNoUnits = ErrorMessage('Missing "spacingUnit" or "remSize" properties when calling makeSpacingTokens()!');
exports.ErrorMakeZindexTokensMissingProps = ErrorMessage('Missing "name" or "characters" properties in Z index frame!');
exports.ErrorMakeZindexTokensNoChildren = ErrorMessage('Z Index frame has no children!');
exports.ErrorMakeZindexTokensNoFrame = ErrorMessage('No frame for makeZindexTokens()!');
exports.ErrorNormalizeUnits = ErrorMessage('Missing arguments for normalizeUnits()!');
exports.ErrorNormalizeUnitsNoRemSize = ErrorMessage('Missing required "remSize" argument for normalizeUnits() when converting to rem/em!');
exports.ErrorNormalizeUnitsUndefined = ErrorMessage('arguments "rootSize" or "unitSize" are undefined!');
exports.ErrorParseBackgroundColor = ErrorMessage('Error in parseBackgroundColor()!');
exports.ErrorParseBorderColor = ErrorMessage('Error in parseBorderColor()!');
exports.ErrorParseBorderRadius = ErrorMessage('Error in parseBorderRadius()!');
exports.ErrorParseBorderWidth = ErrorMessage('Error in parseBorderWidth()!');
exports.ErrorParseCliArgs = ErrorMessage('No arguments array passed to parseCliArgs()!');
exports.ErrorParseCssFromElement = ErrorMessage('Missing one or more of required arguments: "layoutElement", "textElement", "remSize", and/or "outputFormatTokens" when calling parseCssFromElement()!');
exports.ErrorParseElement = ErrorMessage('Missing one or more of required arguments: "element", and/or "remSize" when calling parseElement()!');
exports.ErrorParseHeight = ErrorMessage('Error in parseHeight()!');
exports.ErrorParsePadding = ErrorMessage('Error in parsePadding()!');
exports.ErrorParseShadow = ErrorMessage('Error in parseShadow()!');
exports.ErrorParseTypographyStylingFromElement = ErrorMessage('Missing one or more of required arguments: "element", or "remSize" when calling parseTypographyStylingFromElement()!');
exports.ErrorPrepFileComponent = ErrorMessage('Missing required arguments in type, when calling prepComponent()!');
exports.ErrorPrepFileCss = ErrorMessage('Missing required arguments in type, when calling prepComponent()!');
exports.ErrorPrepFileDescription = ErrorMessage('Missing required arguments in type, when calling prepComponent()!');
exports.ErrorPrepFileStorybook = ErrorMessage('Missing required arguments in type, when calling prepComponent()!');
exports.ErrorPrepFileStyledComponents = ErrorMessage('Missing required arguments in type, when calling prepComponent()!');
exports.ErrorPrepFileGraphicComponent = ErrorMessage('Missing required arguments in type, when calling prepGraphicComponent()!');
exports.ErrorPrepareWrite = ErrorMessage('No templates provided to prepareWrite()!');
exports.ErrorProcessElements = ErrorMessage('Missing one or more of required arguments: "elementsPage", "config", and/or "components"! Make sure you have a page called "Elements" in your Figma document.');
exports.ErrorProcessElementsNoMainElement = ErrorMessage('No MAIN_ELEMENT in processElements()!');
exports.ErrorProcessGraphics = ErrorMessage('Graphics page is undefined or empty! Make sure you have a page called "Graphics" in your Figma document.');
exports.ErrorProcessGraphicsImageError = ErrorMessage('Error when fetching graphics from Figma API!');
exports.ErrorProcessGraphicElementsMap = ErrorMessage('No graphics, or zero-length array, passed to processGraphicElementsMap()!');
exports.ErrorProcessGraphicsNoImages = ErrorMessage('No images received from Figma API!');
exports.ErrorProcessNestedCss = ErrorMessage('No "css" string provided to processNestedCss()!');
exports.ErrorRefresh = ErrorMessage('No path provided to refresh()!');
exports.ErrorReplaceMediaQuery = ErrorMessage('Missing one or more of required arguments: "str", and/or "match" when calling replaceMediaQuery()!');
exports.ErrorRoundColor = ErrorMessage('Error while rounding color value: Required argument "quantity" was not passed in!');
exports.ErrorRoundColorValue = ErrorMessage('Error while rounding color value: Scale value must be equal to or less than 255!');
exports.ErrorSetupMediaQueryTokensMissingProps = ErrorMessage('Missing "absoluteBoundingBox" property in media query frame!');
exports.ErrorSetupMediaQueryTokensNoChildren = ErrorMessage('Media Query frame has no children!');
exports.ErrorSetupMediaQueryTokensNoFrame = ErrorMessage('No frame for makeMediaQueryTokens()!');
exports.ErrorSliceOutObjectFromFile = ErrorMessage('Error in sliceOutObjectFromFile()!');
exports.ErrorToPascalCase = ErrorMessage('Missing "str" argument when calling toPascalCase()!');
exports.ErrorUpdateParsing = ErrorMessage('Error in updateParsing()!');
exports.ErrorValidateConfig = ErrorMessage('Error when validating config!');
exports.ErrorValidateConfigFileName = ErrorMessage('Provided Figma file name in configuration is invalid!');
exports.ErrorValidateConfigFolderName = ErrorMessage('Provided Figma folder name in configuration is invalid!');
exports.ErrorValidateConfigFontUnit = ErrorMessage('Received unrecognized "fontUnit" argument, it must be "rem" (default), "em" or "px".');
exports.ErrorValidateConfigLetterSpacingUnit = ErrorMessage('Received unrecognized "letterSpacingUnit" argument, it must be "em" (default) or "px".');
exports.ErrorValidateConfigOpacitiesUnit = ErrorMessage('Received unrecognized "opacitiesUnit" argument, it must be "float" (default) or "percent".');
exports.ErrorValidateConfigOutputDataTypeToken = ErrorMessage('Received unrecognized "outputDataTypeToken" arguments, it must be null (default), or "enum".');
exports.ErrorValidateConfigOutputFormatCss = ErrorMessage('Received unrecognized "outputFormatCss" arguments, it must be "ts" (default), "mjs" or "js".');
exports.ErrorValidateConfigOutputFormatDesc = ErrorMessage('Received unrecognized "outputFormatDescription" arguments, it must be "md" (default), or "txt".');
exports.ErrorValidateConfigOutputFormatElements = ErrorMessage('Received unrecognized "outputFormatElements" arguments, it must be "tsx" (default), or "jsx".');
exports.ErrorValidateConfigOutputFormatGraphics = ErrorMessage('Received unrecognized "outputFormatGraphics" arguments, it must be "svg" (default) or "png".');
exports.ErrorValidateConfigOutputFormatStorybook = ErrorMessage('Received unrecognized "outputFormatStorybook" arguments, it must be "js" (default), "ts" or "mdx".');
exports.ErrorValidateConfigOutputFormatTokens = ErrorMessage('Received unrecognized "outputFormatTokens" arguments, it must be "ts" (default), "mjs" or "js".');
exports.ErrorValidateConfigOutputScaleGraphics = ErrorMessage('Argument "outputScaleGraphics" is invalid!');
exports.ErrorValidateConfigSpacingUnit = ErrorMessage('Received unrecognized "spacingUnit" argument, it must be "rem" (default), "em" or "px".');
exports.ErrorValidateConfigTemplatePathReact = ErrorMessage('Argument "templatePathReact" cannot be empty!');
exports.ErrorValidateConfigTemplatePathStorybook = ErrorMessage('Argument "templatePathStorybook" cannot be empty!');
exports.ErrorValidateConfigTemplatePathStyled = ErrorMessage('Argument "templatePathStyled" cannot be empty!');
exports.ErrorValidateConfigTemplatePathGraphic = ErrorMessage('Argument "templatePathGraphic" cannot be empty!');
exports.ErrorWrite = ErrorMessage('Error while attempting to write file!');
exports.ErrorWriteBaseJson = ErrorMessage('Error while attempting to write Figma JSON!');
exports.ErrorWriteElements = ErrorMessage('Missing "elements" and/or "config" properties when calling writeElements()!');
exports.ErrorWriteFile = ErrorMessage('Missing required arguments to correctly run writeFile()!');
exports.ErrorWriteFileWrongType = ErrorMessage('Provided invalid file type to writeFile()!');
exports.ErrorWriteGraphics = ErrorMessage('Missing "fileList" and/or "config" argument when calling writeGraphics()!');
exports.ErrorWriteGraphicElementsMap = ErrorMessage('Missing one or more of required arguments "folder", "filePath", and/or "fileContent" when calling writeGraphicElementsMap()!');
exports.ErrorWriteTokens = ErrorMessage('Less than one token provided to writeTokens()! Make sure you have a page called "Design Tokens" in your Figma document.');
exports.ErrorWriteTokensNoSettings = ErrorMessage('Missing "settings" argument/object when attempting to write tokens!');
//# sourceMappingURL=errors.js.map